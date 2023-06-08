"use client";
import { useEffect, useState } from "react";
import { Counter } from "./Counter";
import { useRouter } from "next/navigation";

const EditItemQuanity = ({ QTY, productId }: any) => {
  const [quantity, setQuantity] = useState(QTY);
  const router = useRouter();

  useEffect(() => {
    const updateQuantity = async () => {
      const id = productId;

      const res = await fetch(
        `${process.env.Base_Url}/api/cart?product_id=${id}`,
        { method: "PATCH", body: JSON.stringify({ quantity: quantity }) }
      );
      if (!res.ok) return;

      router.refresh();
    };

    updateQuantity();
  }, [quantity, productId]);

  return (
    <form className="cursor-pointer">
      <Counter quantity={quantity} setQuantity={setQuantity} />
    </form>
  );
};

export default EditItemQuanity;
