import Image from "next/image";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import modalImage from "../assets/modals/modalf0.png";
import { Badge } from "@/components/ui/badge";

export const Promotions = () => {
  return (
    <section className="w-full  py-9 sm:py-9 lg:py-12 ">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-sm text-blue-700 font-bold tracking-wider">
          {" "}
          PROMOTIONS
        </h4>
        <h2 className="scroll-m-20 text-3xl font-bold tracking-wider transition-colors first:mt-0 pt-3 ">
          Our Promotions Events
        </h2>
      </div>
      <div className="pt-6 lg:pt-8 flex lg:flex-row flex-col items-center justify-between space-y-4 lg:space-y-0  space-x-0 lg:space-x-7">
        <div className="flex flex-col  sm:flex-grow  space-y-4 ">
          <div className="bg-gray-300 flex items-center w-full justify-between ">
            <span className="p-6">
              <h3 className="scroll-m-20 text-2xl sm:text-3xl font-bold tracking-tight">
                GET UP TO 60%
              </h3>
              <p className="text-lg leading-7 mt-2">For the summer season</p>
            </span>
            <Image src={modalImage} alt="modal image" />
          </div>
          <div className="bg-gray-800 text-white flex flex-col items-center justify-center w-full">
            <div className="p-12 flex flex-col items-center ">
              <h3 className="scroll-m-20 text-4xl font-bold  tracking-wider">
                GET 30% Off
              </h3>
              <p className="text-sm leading-7 mt-2">USE PROMO CODE</p>
              <Badge
                variant={"secondary"}
                className="rounded-md bg-gray-600 hover:bg-gray-500 text-white text-base tracking-wider font-semibold"
              >
                ECOMHACKFESTSALE
              </Badge>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:space-x-4 sm:flex-basis-0 sm:flex-grow space-y-4 sm:space-y-0">
          <Image
            src={banner3}
            alt="banner 3"
            className="w-full sm:w-auto object-cover"
          />
          <Image src={banner4} alt="banner 4" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
};
