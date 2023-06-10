import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import ProductCard from "@/components/shared/ProductCard";
import { Suspense } from "react";
import { ProductCardSk } from "@/components/skeletons/ProductCardSk";
const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"] {
    price, 
    _id,
    title,
    mainImage,
    type,
    slug,
    category->{
      title
    },
  }`);
  return res;
};

interface IProduct {
  title: string;
  _id: any;
  price: number;
  mainImage: IImage;
  category: {
    name: string;
  };
  slug: {
    current: string;
  };
}

export default async function Home() {
  const data: IProduct[] = await getProductData();

  return (
    <main className="container pb-1 px-2 mb-8 sm:px-5 md:px-10 lg:px-12 xl:px-16 py-10 flex sm:block items-center justify-center h-full">
      <div
        className={`grid grid-cols-1  sm:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] xl:grid-cols-[repeat(4,auto)] justify-between sm:items-start gap-5 ${
          data.length === 1 ? "items-center" : "items-start"
        }`}
      >
        {data.map((product: any, index: any) => (
          <div
            key={index}
            className="transition-transform duration-700 hover:scale-105"
          >
            <Suspense fallback={<ProductCardSk />}>
              <ProductCard product={product} />
            </Suspense>
          </div>
        ))}
      </div>
    </main>
  );
}
