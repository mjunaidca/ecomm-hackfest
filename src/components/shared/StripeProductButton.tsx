"use client";
import { Image as IImage } from "sanity";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "../ui/button";

interface IProduct {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
  title: string;
  mainImage: IImage;
  type: string;
  price: number;
  _id: string;
}
interface ICart {
  totalQuantity: number;
  totalPrice: number;
  querycartData: IProduct[];
}

const StripeProduct = ({ totalQuantity, totalPrice, querycartData }: ICart) => {
  const publishableKey = process.env
    .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
  const stripePromise = loadStripe(publishableKey);

  const createCheckOutSession = async () => {
    const stripe = await stripePromise;

    const item = {
      price: totalPrice,
      quantity: totalQuantity,
      cartProducts: querycartData,
    };

    // console.log(item);
  

    const checkoutSession = await fetch(
      `${process.env.Base_Url}/api/create-stripe-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: item,
        }),
      }
    );

    const sessionID = await checkoutSession.json();
    const result = await stripe?.redirectToCheckout({
      sessionId: sessionID,
    });
    if (result?.error) {
      alert(result.error.message);
    }
  };

  return (
    <div>
      <Button
        className="rounded-none px-10 [&:not(:first-child)]:mt-6"
        onClick={createCheckOutSession}
      >
        {" "}
        Process to checkout{" "}
      </Button>
    </div>
  );
};

export default StripeProduct;
