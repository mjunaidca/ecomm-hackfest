import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductPageSkeleton = () => {
  return (
    <main className="container pb-1 px-2 mb-8 sm:px-5 md:px-10 lg:px-12 xl:px-16 py-10 flex sm:block items-center justify-center h-full">
      <div
        className={`grid grid-cols-1 sm:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] xl:grid-cols-[repeat(4,auto)] justify-between sm:items-start gap-5`}
      >
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="transition-transform duration-700 hover:scale-105"
          >
            <section className="flex flex-col items-start justify-start py-4">
              <Skeleton className="w-[300px] sm:w-[250px] h-[270px] rounded-lg" />
              <Skeleton className="w-[200px] h-6 mt-3" />
              <Skeleton className="w-[100px] h-4 mt-2" />
              <Skeleton className="w-[150px] h-6 mt-2" />
            </section>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductPageSkeleton;
