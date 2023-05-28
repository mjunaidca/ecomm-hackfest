"use client";
import LOGO from "@/assets/LOGO.png";
import Image from "next/image";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

export const navigation = [
  {
    title: "Male",
    path: "/male",
  },
  {
    title: "Female",
    path: "/female",
  },
  {
    title: "Kids",
    path: "/kids",
  },
  {
    title: "All Products",
    path: "/products",
  },
];

export const NavBar = () => {
  return (
    <header className="container flex items-center py-6 md:py-3 px-4 sm:px-8 md:px-12 lg:px-16 mx-auto justify-between">
      <div>
        {/* Logo */}
        <Image src={LOGO} alt="Dine Marketplace" className="h-6 w-36" />
      </div>
        {/* Main Desktop Navigation */}
        <div
          className={` hidden md:flex p-6  flex-col gap-y-3 text-base font-medium  `}
        >
          <DesktopNavigation />
        </div>
      {/* Search Bar */}
      <div className="  w-full hidden lg:block lg:max-w-[300px] xl:max-w-sm">
        <SearchBar />
      </div>
        {/* Cart */}
      <div  className="hidden md:flex">
          <Cart />
      </div>
        <div>{/* Mobile View */}</div>
    </header>
  );
};

const SearchBar = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-y-0 left-0 z-20 flex items-center pl-4 pointer-events-none ">
        <CiSearch />
      </div>
      <input
        type="text"
        id="icon"
        name="icon"
        className="flex w-full flex-grow px-4 py-1 border border-gray-100 text-xs rounded-sm shadow-sm pl-8 xl:pl-11 bg-white"
        placeholder="What are you looking for?"
      />
    </div>
  );
};

const DesktopNavigation = () => {
  return (
    <ul className="items-center flex justify-center md:space-x-8 lg:space-x-9 xl:space-x-12">
      {navigation.map((item: any, idx: any) => {
        return (
          <li key={idx} className="text-gray-800 hover:text-gray-600">
            <Link
              href={item.path}
              className="flex items-center lg:gap-3 xl:gap-x-4 z-10"
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Cart = () => {
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
