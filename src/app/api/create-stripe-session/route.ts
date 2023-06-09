import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
});

export async function POST(req: any, res: NextResponse) {
    const { item } = await req.json();
    const transformedItem = {
        price_data: {
            currency: 'usd',
            product_data: {
                name: 'Dine Shopping Checkout',
                // images: [item.image],
                metadata: {
                    name: "some additional info",
                    task: "Usm created a task"
                },

            },
            unit_amount: item.price * 100,

        },
        quantity: item.quantity,
    };

    const redirectURL = `${process.env.Base_Url}`

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [transformedItem],
        mode: 'payment',
        success_url: redirectURL + '/success',
        cancel_url: redirectURL + '/cancel',
        metadata: {
            images: item.image,
        },
    });
    return NextResponse.json(session?.id);

}
