'use client'
import { useState } from 'react';
import { CartIcon } from "./CartIcon";
import { HiMenu, HiX } from "react-icons/hi";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LOGO from "@/assets/LOGO.png";

const MobileView = ({ navigation }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateClick = (path:any) => {
    router.push(`./${path}`)
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Hamburger Menu */}
      <button onClick={toggleMenu} className="text-2xl" aria-label="Menu">
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Main Navigation */}
      {isOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-50 transition duration-300">
          <div className="p-6 bg-white h-full flex flex-col items-center justify-center gap-y-3 text-base font-medium z-50 transition duration-300">
            <button onClick={toggleMenu} className="absolute top-3 right-3 p-4 text-2xl" aria-label="Close menu">
              <HiX />
            </button>
            <div className='absolute top-3 left-3 p-4 text-2xl'>
            <Image src={LOGO} alt="Dine Marketplace" className="h-6 w-36" />
            </div>
            <CartIcon />
            <ul className="space-y-4 text-center">
              {navigation.map((item:any, idx:any) => (
                <li key={idx} className="text-gray-800 hover:text-gray-600">
                  <div  className="px-2 py-1 cursor-pointer" onClick={() => navigateClick(item.path)}>
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileView;
