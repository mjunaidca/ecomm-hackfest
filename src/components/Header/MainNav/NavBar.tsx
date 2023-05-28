"use client";
import LOGO from "@/assets/LOGO.png";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

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
    title: "Products",
    path: "/products",
  },
];

export const NavBar = () => {
  return (
    <header className="container flex items-center py-3 px-4 mx-auto justify-between">
   
      <div>
        {/* Logo */}
        <Image
          src={LOGO}
          alt="Dine Marketplace"
          className="w-20 h-7 md:h-8 md:w-28 lg:h-9 lg:w-32"
        />
      </div>
      <div>
        {/* Main Navigation */}
        <div className={`p-6 flex flex-col gap-y-3 text-sm font-medium  `}>
            <ul className="items-center flex text-sm justify-center space-x-8">
              {navigation.map((item: any, idx: any) => {
                return (
                  <li
                    key={idx}
                    className="text-gray-600 hover:text-indigo-600"
                  >
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
      <div>{/* Search Bar */}</div>
      <div>{/* User Info */}</div>
      <div>
        {/* Cart */}
        <Link href="">
          <div>
            <ShoppingCart />
          </div>
        </Link>
      </div>
    
    </header>
  );
};
