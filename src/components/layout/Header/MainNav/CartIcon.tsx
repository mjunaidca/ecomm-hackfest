import Link from "next/link";
import { BsCart } from "react-icons/bs";
export const CartIcon = () => {
    return (
      <Link href="">
        <div className="rounded-full">
          <div className="rounded-full bg-gray-200 p-3 hover:bg-gray-200 ">
            <BsCart className="text-black w-5 h-5 rounded-full  hover:scale-110" />
          </div>
        </div>
      </Link>
    );
  };
  