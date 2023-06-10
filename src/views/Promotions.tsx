import Image from "next/image";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import modalImage from "../assets/modals/modalf0.png";
import { Badge } from "@/components/ui/badge";

export const Promotions = () => {
  return (
    <section className="w-full py-9 lg:py-12">
      <div className="flex flex-col items-center justify-center mb-6 lg:mb-8">
        <h4 className="text-sm text-blue-700 font-bold tracking-wider mb-3">
          PROMOTIONS
        </h4>
        <h2 className="scroll-m-20 text-3xl font-bold tracking-wider transition-colors">
          Our Promotions Events
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:space-x-7 space-y-4 lg:space-y-0">
        <div className="flex w-full lg:w-[50%] flex-col space-y-4 lg:space-y-6 lg:flex-grow self-end">
          <div className="bg-gray-300 flex flex-col sm:flex-row items-center justify-between overflow-x-auto">
            <span className=" p-6">
              <h3 className="scroll-m-20 text-2xl sm:text-3xl font-bold tracking-tight">
                GET UP TO 60%
              </h3>
              <p className="text-lg leading-7 mt-2">For the summer season</p>
            </span>
            <Image
              src={modalImage}
              alt="modal image"
              className="max-w-full w-auto h-auto px-3"
            />
          </div>
          <div className="bg-gray-800 text-white flex flex-col items-center justify-center">
            <div className="p-12 flex flex-col items-center">
              <h3 className="scroll-m-20 text-4xl font-bold tracking-wider">
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
        <div className="flex flex-col w-full lg:w-[50%] overflow-hidden sm:flex-row sm:space-x-4 sm:flex-grow space-y-4 sm:space-y-0">
          <Image
            src={banner3}
            alt="banner 3"
            className="w-full h-full object-cover"
          />
          <Image
            src={banner4}
            alt="banner 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
