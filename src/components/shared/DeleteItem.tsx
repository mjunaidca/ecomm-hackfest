"use client";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteItem = (productId: any) => {
  const router = useRouter();
  const handleDeleteClick = async () => {
    const id = productId.productId;
    console.log(id);

    const res = await fetch(
      `${process.env.Base_Url}/api/cart?product_id=${id}`,
      { method: "DELETE" }
    );
    const data = await res.json();
    if (data) {
      router.refresh();
    }

    return data;
  };

  return (
    <div>
      {" "}
      <Trash2 className="w-6 h-6 text-black" onClick={handleDeleteClick} />
    </div>
  );
};

export default DeleteItem;
