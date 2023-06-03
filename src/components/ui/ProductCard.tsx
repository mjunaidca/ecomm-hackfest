"use client";

import Image from "next/image";
import React, { FC } from "react";
import { Button } from "./button";
import { urlForImage } from "../../../sanity/lib/image";

interface IProduct {}

const ProductCard: FC<{ product: any }> = ({ product }) => {
  const handleAddToCart = async () => {
    console.log("product", product._id);
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: product._id,
      }),
    });
    console.log("res", res);

    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <Image
        src={urlForImage(product.mainImage).url()}
        width={200}
        height={300}
        className="max-h-[300px] object-cover"
        alt={product.mainImage.alt}
      />
      <h3>{product.title}</h3>
      <p>SKU: {product.sku}</p>
      <p>Price: {product.price}</p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </>
  );
};

export default ProductCard;
