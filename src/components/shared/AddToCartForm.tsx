"use client";
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";
import React, { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Counter } from "./Counter";

const AddToCartForm: FC<{ product: any }> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = async (event: React.FormEvent) => {
    event.preventDefault();

    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: product._id,
        quantity: quantity,
      }),
    });
    if (res.status === 200) {
      toast.success(`${quantity} ${product.title} added to cart`);
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <form className="block  space-y-7">
      <Toaster /> {/* Size */}
      <div className="">
        <h4 className=" text-base font-bold ">Select Size</h4>
        <div className="flex items-center space-x-4">
          {product.sizes.map((size: any, index: any) => (
            <div key={index} className="flex pt-3 items-center justify-center">
              <input
                type="radio"
                name="size"
                id={size.size}
                className="hidden"
              />
              <label
                htmlFor={size.size}
                className="flex items-center  justify-center  w-10 h-10  hover:bg-white hover:shadow-xl font-bold rounded-full cursor-pointer text-gray-500 hover:border-gray-400 transition-colors"
              >
                {size.size}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Quantity */}
      <div className="flex items-center space-x-3">
        <h4 className="scroll-m-16 text-base font-bold ">Quantity:</h4>

        <span className="">
          <Counter quantity={quantity} setQuantity={setQuantity} />
        </span>
      </div>
      {/* Price */}
      <div className="flex items-center space-x-4">
        <Button
          className=" text-base font-medium"
          type="submit"
          onClick={handleAddToCart}
        >
          {" "}
          <span className="pr-3">
            <FiShoppingCart />
          </span>{" "}
          Add to Cart
        </Button>
        <h3 className=" text-xl lg:text-2xl font-semibold text-gray-900 tracking-tight">
          ${product.price}
        </h3>
      </div>
    </form>
  );
};

export default AddToCartForm;
