import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
export const CartIcon = () => {
  return (
    <Link href="/cart">
      <div className="rounded-full">
        <div className="rounded-full bg-gray-200 p-3 hover:bg-gray-200 ">
          <FiShoppingCart className="text-black w-5 h-5 rounded-full  hover:scale-110" />
        </div>
      </div>
    </Link>
  );
};
