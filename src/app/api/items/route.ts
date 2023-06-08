import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
    const user_id = cookies().get("user_id")?.value as string;

    console.log('====> user_id', user_id);
    if (!user_id) return NextResponse.json({ message: "Empty Add To Cart" })
    try {
        const status = await db.select({ quanity: cartTable.quantity }).from(cartTable).where(eq(cartTable.user_id, user_id))
        console.log('====> status', status);


        return NextResponse.json({ status })
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ message: "Something went wrong" })
    }
}

