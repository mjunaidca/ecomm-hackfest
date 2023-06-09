import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImage from "../assets/modals/HeroImage.png";
import { ShoppingCart } from "lucide-react";
import Baztar from "../assets/Baztar.png";
import Bustle from "../assets/Bustle.png";
import InStyle from "../assets/InStyle.png";
import Vercase from "../assets/Vercase.png";

const Hero = () => {
  return (
    <section className="flex-col flex w-full lg:flex-row gap-y-10 py-6 max-h-[80vh]">
      <div className="flex-1  basis-full items-start flex flex-col space-y-16 justify-between lg:basis-[54%] pr-8">
        <div className="block items-start justify-between lg:space-y-10 xl:space-y-12 pt-10">
          <Badge
            variant="secondary"
            className="py-1.5 px-4 text-base rounded-lg bg-blue-100 hover:bg-blue-100 text-blue-700"
          >
            Sale 70%
          </Badge>

          <h1 className="scroll-m-20 font-extrabold tracking-tight text-5xl mt-8">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 mr-1 lg:mr-32">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Button className="bg-gray-800 rounded-none border-2 border-gray-800  h-16 px-12 mt-8 space-x-3">
            {" "}
            <ShoppingCart className="" />{" "}
            <span className="text-base"> Start Shopping</span>
          </Button>
        </div>

        <div className="sm:flex items-center sm:justify-between sm:space-x-4  pb-4 bottom-0 w-full pr-0 lg:pr-16 grid grid-cols-2">
          <Image alt="Baztar" src={Baztar} className=" w-24 h-10" />
          <Image alt="Bustle" src={Bustle} className=" w-24 h-10" />

          <Image alt="InStyle" src={InStyle} className=" w-24 h-10" />
          <Image alt="Vercase" src={Vercase} className=" w-24 h-12" />
        </div>
      </div>
      <div className="flex-1 pt-4 hidden lg:flex items-center justify-center  basis-full lg:basis-[46%]">
        <div className="bg-orange-100/70 rounded-full flex items-center justify-center">
          <Image
            src={HeroImage}
            alt="Header Image"
            className="transform top-0  -translate-y-5 translate-x-1.5 " // Move the image 10% upwards
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
