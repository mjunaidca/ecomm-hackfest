"use client";
import LOGO from "@/assets/LOGO.png";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {CiSearch} from "react-icons/ci"

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
    <header className="container flex items-center py-3 px-16 mx-auto justify-between">
      <div>
        {/* Logo */}
        <Image
          src={LOGO}
          alt="Dine Marketplace"
          className="w-20 h-7 md:h-6 md:w-36"
        />
      </div>
      <div>
        {/* Main Navigation */}
        <div className={`p-6 flex flex-col gap-y-3 text-base font-medium  `}>
          <ul className="items-center flex justify-center space-x-8 xl:space-x-10">
            {navigation.map((item: any, idx: any) => {
              return (
                <li key={idx} className="text-gray-800 hover:text-gray-600">
                  <Link
                    href={item.path}
                    className="flex items-center gap-x-4 z-10"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='  w-full max-w-[200px] lg:max-w-xs'>
        {/* Search Bar */}

        <SearchBar  />
      
      </div>
      <div>{/* User Info */}</div>
      <div>
        {/* Cart */}
        <Link href="">
          <div className="rounded-full">
            <div className="rounded-full bg-gray-200 p-3 hover:bg-gray-200 ">
              <BsCart className="text-black w-5 h-5 rounded-full  hover:scale-110" />
            </div>
          </div>
        </Link>
      </div>
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
        className="block w-full px-4 py-1 border border-gray-100 text-xs rounded-sm shadow-sm pl-8 xl:pl-11 bg-white"
        placeholder="What are you looking for?"
      />
    </div>
  );
};