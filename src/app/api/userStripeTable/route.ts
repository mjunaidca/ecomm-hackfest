import { NextRequest, NextResponse } from "next/server";
import { db, userStripeTable } from "@/lib/drizzle";
import { cookies } from "next/headers";

export const POST = async (request: NextRequest) => {
    const req = await request.json();

    let user_id = cookies().get("user_id")?.value as string;

    if (!user_id) {
        return NextResponse.json({ message: "Unable To Authnticate User" })
    }

    try {
        const stripe_id: string = req.stripeSession;

        const res = await db.insert(userStripeTable).values({ stripe_id: stripe_id, user_id: user_id }).returning();
        if (!res) return NextResponse.json({ message: "Unable To Find User" })

        return NextResponse.json({ res })
    }
    catch (error) {
        // console.log(error);
        return null
    }
}
