import React from "react";
import { Skeleton } from "../ui/skeleton";

export const ProductCardSk = () => {
  return (
    <section className="flex flex-col items-start justify-start py-4 ">
      <Skeleton className="w-[300px] sm:w-[250px] h-[270px] rounded-lg" />
      <Skeleton className="w-[200px] h-6 mt-3" />
      <Skeleton className="w-[100px] h-4 mt-2" />
      <Skeleton className="w-[150px] h-6 mt-2" />
    </section>
  );
};

export const ProductImage = () => {
  return (
    <section className="flex flex-col items-start justify-start py-4 ">
      <Skeleton className="w-[300px] sm:w-[250px] h-[270px] rounded-lg" />
    </section>
  );
};
