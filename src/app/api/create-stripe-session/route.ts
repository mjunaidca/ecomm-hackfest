import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import urlFor from "@/lib/urlFor";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
});

export async function POST(req: any, res: NextResponse) {
    const { item } = await req.json();


    const transformedItems = item.cartProducts.map((product: any) => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: product.title,
                images: [urlFor(product.mainImage).url()],
                metadata: {
                    product_id: product.product_id,
                    user_id: product.user_id
                },
            },
            unit_amount: product.price * 100,
        },
        quantity: product.quantity,
    }));



    const redirectURL = `${process.env.Base_Url}`

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        // line_items: [transformedItem],
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${redirectURL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: redirectURL + '/cancel',
        metadata: {
            images: item.image,
        },
    });
    return NextResponse.json(session?.id);

}
