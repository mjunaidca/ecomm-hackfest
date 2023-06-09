import LOGO from "@/assets/LOGO.png";
import Image from "next/image";
import Link from "next/link";
import { fooComp, fooContact, fooSupport } from "@/lib/data/footer";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const BottomBar = () => {
  return (
    <section className="border-t-2 w-full max-w-7xl space-y-5 lg:space-y-0 flex flex-col  lg:flex-row container items-start  justify-between my-2 py-6 md:py-3">
      <div className="justify-center ">
        <p className="text-md text-muted-foreground w-full lg:w-[70%]">
          Copyright © 2022 Dine Market
        </p>
      </div>
      <div className=" justify-center">
        <p className="text-md text-muted-foreground w-full lg:w-[70%]">
          <b>Design by.</b> Weird Design Studio
        </p>
      </div>
      <div className=" justify-left">
        <p className="text-md text-muted-foreground w-full lg:w-[70%]">
          Code by. <b>mjunaidca on github</b>
        </p>
      </div>
    </section>
  );
};

export default BottomBar;
