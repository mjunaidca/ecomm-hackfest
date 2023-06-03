import { client } from "@/lib/sanityClient";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/ProductCard";
const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"] {
    price, 
    _id,
    title,
    mainImage,
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
}

export default async function Home() {
  const data: IProduct[] = await getProductData();

  return (
    <main className="grid grid-cols-[repeat(3,auto)] justify-center gap-10">
      {data.map((product: any, index: any) => (
        <div key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </main>
  );
}
