"use client";
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";
import React, { FC } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddToCartForm: FC<{ product: any }> = ({ product }) => {
  const handleAddToCart = async () => {
    console.log("product", product._id);
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: product._id,
      }),
    });
    console.log("res", res);
    if (res.status === 200) {
      toast.success("Added to cart");
    } else {
      toast.error("Something went wrong");
    }

  };
  return (
    <div>
      <Toaster />{" "}
      <Button className=" text-base font-medium" onClick={handleAddToCart}>
        {" "}
        <span className="pr-3">
          <FiShoppingCart />
        </span>{" "}
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartForm;
