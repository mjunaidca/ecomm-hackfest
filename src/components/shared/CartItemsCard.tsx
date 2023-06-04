import React from "react";
import { FC } from "react";
import { Trash2 } from "lucide-react";
import urlFor from "@/lib/urlFor";
import Image from "next/image";

const CartItemsCard: FC<{ product: any }> = ({ product }) => {
  return (
    <div className="flex  py-6">
      <div className="flex w-3/4  space-x-5">
        <Image
          src={urlFor(product.mainImage).url()}
          width={200}
          height={320}
          alt={product.mainImage.alt}
          className="max-h-[320px]   rounded-lg max-w-[200px] w-full object-cover"
        />
        {/* Heading */}
        <div className="flex w-full flex-col space-y-5">
          <h4 className="scroll-m-20 text-xl font-normal tracking-tight">
            {product.title}
          </h4>
          <p className="text-lg text-muted-foreground">{product.type}</p>
          <p className="text-base font-medium ">Delivery Estimation</p>
          <p className="text-base font-medium  text-yellow-500">
            5 Working Days
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            ${product.price}
          </h4>
        </div>
      </div>
      {/* Delete and Order Count */}
      <div className="w-1/4 flex justify-end  ">
        
        <Trash2 className="w-6 h-6 text-black" />
      </div>
    </div>
  );
};

export default CartItemsCard;
