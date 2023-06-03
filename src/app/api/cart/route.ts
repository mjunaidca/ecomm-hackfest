import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { cartTable, db } from "@/lib/drizzle";
import { cookies } from "next/headers";

export const GET = async (request: Request) => {
    try {
        const res = await db.select().from(cartTable)

        return NextResponse.json({ res })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" })
    }
}

export const POST = async (request: Request) => {
    const req = await request.json();
    console.log('SERVER ID', req.product_id);


    const uid = uuid();


    const setCookies = cookies();

    setCookies.set("user_id", uid);
    const user_id = cookies().get("user_id");
    // console.log('USER ID', user_id);


    // if (!user_id || user_id === undefined) {
    //     setCookies.set("user_id", uid);
    // }

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