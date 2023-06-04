import React from "react";
import { FC } from "react";
import AddToCartForm from "@/components/shared/AddToCartForm";
import { client } from "@/lib/sanityClient";
import urlFor from "@/lib/urlFor";
import Image from "next/image";

const CartItemsCard: FC<{ product: any }> = ({ product }) => {
  return (
    <div>
      {/* Produt Details */}
      {/* Image */}
      <div className="flex items-center">
        <div className="lg:basis-3/5 flex basis-full space-x-10">
          <div className="space-y-5 ">
            <div>
              <Image
                src={urlFor(product.mainImage).url()}
                width={225}
                height={350}
                alt={product.mainImage.alt}
                className="max-h-420px] max-w-[275px] w-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Checkout Details */}
        <div className="lg:basis-2/5 basis-full py-16 px-2 lg:px-5 xl:px-8 space-y-8">
          {/* Heading */}
          <div>
            <h2 className="scroll-m-20 pb-1  text-2xl lg:text-3xl font-normal tracking-tight transition-colors first:mt-0">
              {product.title}
            </h2>
            <h3 className="scroll-m-20 text-xl lg:text-2xl font-semibold text-gray-400 tracking-tight">
              {product.type}
            </h3>
          </div>
          {/* Size */}
          <div>
            <h4 className="scroll-m-20 text-lg font-semibold ">Select Size</h4>
          </div>
          {/* Quantity */}
          <div>
            <h4 className="scroll-m-20 text-lg font-semibold ">Quantity</h4>
          </div>
        </div>
      </div>
      <div></div>
      {/* Delete and Order Count */}
      <div></div>
    </div>
  );
};

export default CartItemsCard;
