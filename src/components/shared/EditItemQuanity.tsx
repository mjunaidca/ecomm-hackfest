"use client";
import { useEffect, useState } from "react";
import { Counter } from "./Counter";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const EditItemQuanity = ({ QTY, productId }: any) => {
  const [quantity, setQuantity] = useState(QTY);
  const router = useRouter();

  // const handleEditClick = async (event: React.FormEvent) => {
  //   event.preventDefault();

  //   const id = productId;

  //   const res = await fetch(
  //     `${process.env.Base_Url}/api/cart?product_id=${id}`,
  //     { method: "PATCH", body: JSON.stringify({ quantity: quantity }) }
  //   );
  //   if (res.status === 200) {
  //     toast.success(`Cart Updated`);
  //   } else {
  //     toast.error("Something went wrong");
  //   }
  // };

  useEffect(() => {
    const updateQuantity = async () => {
      const id = productId;

      const res = await fetch(
        `${process.env.Base_Url}/api/cart?product_id=${id}`,
        { method: "PATCH", body: JSON.stringify({ quantity: quantity }) }
      );

      if (res.status === 200) {
        // toast.success(`Cart Updated`);
        router.refresh();
      } else {
        toast.error("Something went wrong");
      }
    };

    updateQuantity();
  }, [quantity]);

  return (
    <form className="cursor-pointer">
      <Toaster />
      <Counter quantity={quantity} setQuantity={setQuantity} />
    </form>
  );
};

export default EditItemQuanity;
