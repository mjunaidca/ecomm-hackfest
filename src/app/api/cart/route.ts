import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { cartTable, db } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
    const req = request.nextUrl;
    const uid = req.searchParams.get("user_id") as string;
    if (!uid) return NextResponse.json({ message: "Empty Add To Cart" })
    try {
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid))

        return NextResponse.json({ res })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" })
    }
}

export const POST = async (request: NextRequest) => {
    const req = await request.json();
    console.log('SERVER ID', req.product_id);

    const uid = uuid();

    const setCookies = cookies();

    const user_id = cookies().get("user_id");


    if (!user_id) {
        setCookies.set("user_id", uid);
    }
    console.log('USER ID', user_id);


    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: cookies().get("user_id")?.value as string,
        }).returning()

        return NextResponse.json({ res })
    } catch (error) {

    }

}

export const DELETE = async (request: NextRequest) => {
    const req = request.nextUrl;
    console.log('SERVER ID', req.searchParams.get("product_id"));

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
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" })
    }
}
