import { NextResponse } from "next/server";
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
                name: 'Test',
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

    const redirectURL = 'http://localhost:3000';
    // process.env.NODE_ENV === 'development'
    //     ? 'http://localhost:3000'
    //     : 'your live vercel app link';

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [transformedItem],
        mode: 'payment',
        success_url: redirectURL + '/success',
        cancel_url: redirectURL + '/fail',
        // metadata: {
        //     images: item.image,
        // },
    });
    return NextResponse.json(session?.id);

}
