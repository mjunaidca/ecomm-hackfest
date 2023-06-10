import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";


export const DELETE = async (request: NextRequest) => {

    const user_id = cookies().get("user_id")?.value as string;

    if (!user_id) return NextResponse.json({ message: "Cart is Already Empty" })

    try {
        const res = await db.delete(cartTable).where(
            eq(cartTable.user_id, user_id)
        )

        return NextResponse.json({ message: "Product removed" }, { status: 200 })
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ message: "Something went wrong" })
    }
}
