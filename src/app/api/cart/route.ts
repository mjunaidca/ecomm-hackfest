import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { cartTable, db } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { and, eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
    const req = request.nextUrl;
    const uid = req.searchParams.get("user_id") as string;
    // const uid = cookies().get("user_id")?.value as string;
    if (!uid) return NextResponse.json({ message: "Empty Add To Cart" })
    try {
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid))

        return NextResponse.json({ res })
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ message: "Something went wrong" })
    }
}

// export const POST = async (request: NextRequest) => {
//     const req = await request.json();
//     // console.log('POST SERVER ID', req.product_id);

//     const uid = uuid();
//     const setCookies = cookies();
//     const user_id = cookies().get("user_id");

//     if (!user_id) {
//         setCookies.set("user_id", uid);
//     }
//     // console.log('USER ID', user_id);

//     try {
//         const res = await db.insert(cartTable).values({
//             product_id: req.product_id,
//             quantity: req.quantity,
//             user_id: cookies().get("user_id")?.value as string,
//         }).returning()

//         return NextResponse.json({ res })
//     } 



//     catch (error) {

//     }

// }



export const POST = async (request: NextRequest) => {
    const req = await request.json();
    // console.log('POST SERVER ID', req.product_id);

    const uid = uuid();
    const setCookies = cookies();
    const user_id = cookies().get("user_id");

    if (!user_id) {
        setCookies.set("user_id", uid);
    }
    // console.log('USER ID', user_id);

    try {

        if (user_id !== undefined) {
            const productIdsArray = await db.select({ product_id: cartTable.product_id, user_id: cartTable.user_id, quantity: cartTable.quantity }).from(cartTable).where(eq(cartTable.user_id, cookies().get("user_id")?.value as string))
            console.log('PRODUCT IDS ARRAY', productIdsArray);

            const isProductInArray = productIdsArray.some(product => product.product_id === req.product_id);
            const existingProductQuanity = productIdsArray.find(product => product.product_id === req.product_id)?.quantity;
            console.log('EXISTING QTY', existingProductQuanity);
            const newQTY = existingProductQuanity + req.quantity;

            console.log('NEW', newQTY);


            console.log(isProductInArray);

            if (!isProductInArray) {

                const res = await db.insert(cartTable).values({
                    product_id: req.product_id,
                    quantity: req.quantity,
                    user_id: cookies().get("user_id")?.value as string,
                }).returning()

                return NextResponse.json({ res })
            }
            else {
                const res = await db.update(cartTable).set({ quantity: newQTY }).where(
                    and(eq(cartTable.user_id, cookies().get("user_id")?.value as string),
                        eq(cartTable.product_id, req.product_id)
                    )

                ).returning();

                return NextResponse.json({ res })

            }



        } else {

            const res = await db.insert(cartTable).values({
                product_id: req.product_id,
                quantity: req.quantity,
                user_id: cookies().get("user_id")?.value as string,
            }).returning()

            return NextResponse.json({ res })
        }



    }



    catch (error) {

    }

}

export const PATCH = async (request: NextRequest) => {

    const req = request.nextUrl;
    const product_id = req.searchParams.get("product_id") as string;

    const data = await request.json();

    const quantity: number = data.quantity;
    const user_id = cookies().get("user_id")?.value as string;

    // console.log('====> productid, userid', product_id, user_id);
    // console.log('====> quanity', quantity);

    if (!product_id || !user_id) return NextResponse.json({ message: "Missing required parameter" })

    try {
        // console.log('CALL PATCH ========= DATA', data);

        const res = await db.update(cartTable).set({ quantity: quantity }).where(
            eq(cartTable.user_id, user_id)
            && eq(cartTable.product_id, product_id)
        ).returning();

        // console.log('PATCH ==+++====+++=== RES', res);

        return NextResponse.json({ message: "Product Quantity Update" }, { status: 200 })
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ message: "Unabkle to Update quanitity!" })
    }



}

export const DELETE = async (request: NextRequest) => {
    const req = request.nextUrl;
    // console.log('DELETE SERVER ID', req.searchParams.get("product_id"));

    const product_id = req.searchParams.get("product_id") as string;
    const user_id = cookies().get("user_id")?.value as string;

    if (!product_id || !user_id) return NextResponse.json({ message: "Missing required parameter" })

    try {
        const res = await db.delete(cartTable).where(
            eq(cartTable.user_id, user_id)
            && eq(cartTable.product_id, product_id)
        )

        return NextResponse.json({ message: "Product removed" }, { status: 200 })
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ message: "Something went wrong" })
    }
}
