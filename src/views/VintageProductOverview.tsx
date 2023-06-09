import Image from "next/image";
import modalImage from "../assets/modals/modalf1.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const VintageProductOverview = () => {
  return (
    <section className="w-full  py-9 sm:py-9 lg:py-12 ">
      <div className="lg:flex w-full items-center justify-start sm:justify-center lg:justify-end">
        <h2 className="text-left w-full xl:w-1/2 text-4xl font-bold tracking-wider leading-normal lg:text-5xl">
          Unique and Authentic Vintage Designer Jewellery
        </h2>
      </div>
      <div className="pt-6 lg:pt-8 flex lg:flex-row flex-col items-center justify-between space-y-12 lg:space-y-0 space-x-0 lg:space-x-7">
        <div className="flex flex-col basis-auto lg:basis-1/2 w-full sm:flex-grow space-y-4 relative">
          <h1 className="text-8xl font-bold text-gray-100 absolute z-0 inset-0 flex items-center justify-center">
            Different From Others
          </h1>
          <div className="grid grid-cols-2 gap-4 z-10 relative">
            {dummyData.map((item, index) => (
              <div key={index} className=" p-0 sm:p-4 rounded-md ">
                <h3 className="font-semibold text-lg mb-2 ">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 basis-auto lg:basis-1/2 w-full  sm:flex-basis-0 sm:flex-grow space-y-4 sm:space-y-0">
          <Image
            src={modalImage}
            alt="banner 3"
            className="w-1/2  object-cover"
          />
          <div className=" w-full md:w-1/2 items-center md:items-start justify-center flex-col flex py-3 pl-2 px-2">
            <p className="leading-7 [&:not(:first-child)]:mt-6 pb-6 text-justify">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href={"/products"}>
              <Button className="rounded-none text-base bg-gray-900 ">
                See All Products
              </Button>
            </Link>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default VintageProductOverview;

const dummyData = [
  {
    title: "Using Good Quality Materials",
    description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
  {
    title: "100% Handmade Products",
    description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
  {
    title: "Modern Fashion Design",
    description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
  {
    title: "Discount for Bulk Orders",
    description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
];
