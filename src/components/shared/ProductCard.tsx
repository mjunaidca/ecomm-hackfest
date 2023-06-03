"use client";

import Image from "next/image";
import React, { FC } from "react";
import { Button } from "../ui/button";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

interface IProduct {}

const ProductCard: FC<{ product: any }> = ({ product }) => {
  return (
    <section className="flex flex-col items-start justify-start py-4 ">
      <Link href={`./${product.slug.current}`}>
        <div className="flex flex-col items-start justify-center w-[300px] sm:w-[250px] overflow-auto gap-y-1">
          <Image
            src={urlForImage(product.mainImage).url()}
            width={250}
            height={400}
            className="max-h-[380px] max-w-[280px] sm:max-w-[250px] w-full object-cover"
            alt={product.mainImage.alt}
          />
          <h4 className="text-lg pt-1 font-semibold overflow-auto whitespace-normal">
            {product.title}
          </h4>
          <p className="text-md font-semibold text-muted-foreground">
            {" "}
            {product.type}
          </p>
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight pt-1">
            $ {product.price}
          </h3>
        </div>
      </Link>
    </section>
  );
};

export default ProductCard;
