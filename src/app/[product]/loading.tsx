import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductPageSkeleton = () => {
  return (
    <main className="container flex flex-col min-w-full min-h-screen bg-slate-50 py-12">
      {/* Product Image */}
      <section className="flex flex-col lg:flex-row h-full mb-20">
        {/* Image */}
        <div className="lg:basis-3/5 flex basis-full space-x-10">
          <div className="w-[15%] space-y-5">
            <div>
              <Skeleton className="h-[140px] max-w-[135px] object-cover" />
            </div>
            <div>
              <Skeleton className="h-[140px] max-w-[135px] w-full object-cover" />
              <p>
                <Skeleton className="w-20 h-4 mt-2" />
              </p>
            </div>
          </div>

          <div className="w-[85%]">
            <Skeleton className="max-h-screen h-[470px] max-w-full w-full object-cover" />
          </div>
        </div>
        {/* Checkout Details */}
        <div className="lg:basis-2/5 basis-full py-16 px-2 lg:px-5 xl:px-8 space-y-8">
          {/* Heading */}
          <div>
            <Skeleton className="pb-1 px-18 py-4" />
            <Skeleton className="scroll-m-20 text-xl xl:text-2xl font-semibold text-gray-400 tracking-tight" />
          </div>
          {/* Order Form */}
          <>
            <Skeleton className="w-full h-12" />
          </>
        </div>
      </section>

      {/* Product Description */}
      <section className="flex flex-col bg-white p-7 md:p-10">
        {/* Header */}
        <div className="relative flex items-center py-7 md:py-10">
          <p className="absolute text-gray-100 z-10 font-bold text-[48px] sm:text-[84px] lg:text-[118px]">
            Overview
          </p>
          <h2 className="scroll-m-20 pb-1 text-xl lg:text-2xl font-semibold tracking-tight transition-colors first:mt-0 z-20">
            Product Information
          </h2>
        </div>
        <hr className="border-gray-200 border-t-2 my-4" />
        {/* Details */}
        <div className="flex justify-between py-5 space-x-5">
          <div className="basis-1/3 w-full">
            <h4 className="scroll-m-20 text-lg text-gray-500 font-semibold tracking-tight">
              PRODUCT DETAILS:
            </h4>
          </div>
          <div className="basis-2/3 w-full">
            <Skeleton className="w-4/5 h-6 mt-6" />
          </div>
        </div>
        {/* Care */}
        <div className="flex justify-between py-5 space-x-5">
          <div className="basis-1/3 w-full">
            <h4 className="scroll-m-20 text-lg text-gray-500 font-semibold tracking-tight">
              PRODUCT CARE:
            </h4>
          </div>
          <div className="basis-2/3 w-full">
            <ul
              className="leading-7 text-justify font-bold [&:not(:first-child)]:mt-6"
              style={{ listStyleType: "disc" }}
            >
              {[...Array(3)].map((_, index) => (
                <li key={index}>
                  <Skeleton className="w-4/5 h-6 mt-2" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPageSkeleton;
