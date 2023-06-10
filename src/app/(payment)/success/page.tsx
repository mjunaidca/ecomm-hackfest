"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Success = () => {
  const stripeSession = useSearchParams().get("session_id");

  useEffect(() => {
    const clearCart = async () => {
      if (stripeSession) {
        const res = await fetch(`${process.env.Base_Url}/api/clearcart`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (!data.ok) {
          return null;
          // console.log("error");
        }
      }
    };
    const updateOrder = async () => {
      const updateStripeTable = await fetch(
        `${process.env.Base_Url}/api/userStripeTable`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ stripeSession }),
        }
      );

      const verifyStripeSession = await updateStripeTable.json();

      if (!verifyStripeSession.ok) {
        return null;
        // console.log("error");
      }
    };
    clearCart();
    updateOrder();
  }, [stripeSession]);
  // console.log(stripeSession);

  return (
    <section className="w-full flex flex-col items-center space-y-10 justify-center my-16 rounded-2xl sm:my-9 lg:my-16 bg-gray-200 min-h-[70vh] ">
      <ShoppingBag size={80} />
      <h2 className="scroll-m-20 font-extrabold tracking-tight text-5xl mt-8">
        Thank you for your order!
      </h2>
      <p className="text-lg leading-7 mt-2">
        Your Order Tracking Id:
        <span className="break-all font-light text-base"> {stripeSession}</span>
      </p>
      <p className="text-lg leading-7 mt-0">
        Check your <span className="underline">email inbox</span> for the
        receipt
      </p>
      <p className="text-lg leading-7 mt-2">
        For any questions{" "}
        <span className="text-red-600 font-semibold">
          {" "}
          ecomehackfest@gmail.com
        </span>
      </p>

      <Link href="/products">
        <Button
          type="submit"
          className="z-40 rounded-lg px-8 py-3 cursor-pointer"
        >
          Continue Shopping
        </Button>
      </Link>
    </section>
  );
};

export default Success;
