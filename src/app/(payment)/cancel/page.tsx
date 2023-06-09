import { Button } from "@/components/ui/button";

import Link from "next/link";
const Cancel = () => {
  return (
    <section className="w-full flex flex-col items-center space-y-10 justify-center my-16 rounded-2xl sm:my-9 lg:my-16 bg-gray-200 min-h-[60vh] ">
      <h2 className="scroll-m-20 font-extrabold tracking-tight text-5xl mt-8">
        Unable To Checkout!
      </h2>
      <p className="text-lg leading-7 mt-2">
        Email us at:
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

export default Cancel;
