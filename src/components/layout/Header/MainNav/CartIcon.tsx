"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { ShoppingCart } from "lucide-react";
import { Suspense } from "react";
import { CartIconSk } from "@/components/skeletons/cartIconSk";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const CartIcon = ({ setIsOpen }: { setIsOpen?: (isOpen: boolean) => void }) => {
  // const [sum, setSum] = useState(0);
  const router = useRouter();

  const { data, error, isLoading } = useSWR(`/api/items`, fetcher, {
    refreshInterval: 1,
  });

  if (!data) return null;

  if (isLoading) return <CartIconSk />;

  const { status } = data;

  let items = status;

  let newSum = 0;
  if (items && Array.isArray(items) && items.length > 0) {
    newSum = items.reduce((total, item) => total + item.quanity, 0); // Use 'quanity' based on your response
  } else if (data?.message === "Empty Add To Cart") {
    newSum = 0;
  } else if (data.status.length === 0) {
    newSum = 0;
  } else {
    console.error("Unexpected response from /api/items", data);
  }

  const handleCart = () => {
    setIsOpen && setIsOpen(false);
    router.refresh();
    router.push("/cart");
  };

  return (
    <button onClick={handleCart}>
      <Suspense fallback={<CartIconSk />}>
        <div className="relative py-4">
          <div className="bg-gray-200 p-3 hover:bg-gray-200 rounded-full inline-block">
            <ShoppingCart className="text-black w-5 h-5 rounded-full font-extrabold  hover:scale-110" />
          </div>
          <span className="absolute top-0 right-0 mt-3 bg-red-600 text-gray-50 text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {newSum}
          </span>
        </div>
      </Suspense>
    </button>
  );
};
