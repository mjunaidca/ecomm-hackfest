"use client";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const CartIcon = () => {
  // const [sum, setSum] = useState(0);
  const router = useRouter();

  const { data, error, isLoading } = useSWR(`/api/items`, fetcher, {
    refreshInterval: 1,
  });

  if (!data) return null;

  const { status } = data;
  let items = status;

  let newSum = 0;
  if (items && Array.isArray(items) && items.length > 0) {
    newSum = items.reduce((total, item) => total + item.quanity, 0); // Use 'quanity' based on your response
  } else if (data?.message === "Empty Add To Cart") {
    newSum = 0;
  } else {
    console.error("Unexpected response from /api/items", data);
  }

  const handleCart = () => {
    router.refresh();
    router.push("/cart");
  };

  // useEffect(() => {
  //   const getCart = async () => {
  //     const res = await fetch(`/api/items`);
  //     const data = await res.json();
  //     const items = data.status;

  //     console.log("Items from /api/items: ", items); // Log the actual items

  //     let newSum = 0;
  //     if (items && Array.isArray(items) && items.length > 0) {
  //       newSum = items.reduce((total, item) => total + item.quanity, 0); // Use 'quanity' based on your response
  //     } else if (data?.message === "Empty Add To Cart") {
  //       newSum = 0;
  //     } else {
  //       console.error("Unexpected response from /api/items", data);
  //     }

  //     setSum(newSum);
  //     router.refresh();
  //   };
  //   getCart();
  // }, []);

  // if (!sum) {
  //   <Link href="/cart">
  //     <div className="relative">
  //       <div className="bg-gray-200 p-3 hover:bg-gray-200 rounded-full inline-block">
  //         <FiShoppingCart className="text-black w-5 h-5 rounded-full  hover:scale-110" />
  //       </div>
  //     </div>
  //   </Link>;
  // }

  return (
    <button onClick={handleCart}>
      <div className="relative">
        <div className="bg-gray-200 p-3 hover:bg-gray-200 rounded-full inline-block">
          <FiShoppingCart className="text-black w-5 h-5 rounded-full  hover:scale-110" />
        </div>

        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {newSum}
        </span>
      </div>
    </button>
  );
};
