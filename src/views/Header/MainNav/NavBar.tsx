import LOGO from "@/assets/LOGO.png";
import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "./CartIcon";
import { CiSearch } from "react-icons/ci";
import MobileView from "./MobileView";
import {navigation} from "@/lib/data/navigation"

export const NavBar = () => {
  return (
    <header className="container flex items-center py-6 md:py-3 px-4 sm:px-8 md:px-12 lg:px-16 mx-auto justify-between">
      <div>
        {/* Logo */}
        <Link href='/'>
        <Image src={LOGO} alt="Dine Marketplace" className="h-6 w-36" />
        </Link>
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
          <CartIcon />
      </div>
        <div className="md:hidden">{/* Mobile View */}
        <MobileView navigation={navigation} />
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

