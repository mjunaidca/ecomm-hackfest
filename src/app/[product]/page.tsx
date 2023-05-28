import { client } from "@/lib/sanityClient";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";

const getProductData = async (slug: string) => {
  const res = await client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]{
    ...,
    category->}`);
  return res;
};

interface Props {
  params:{
    product: string
  }
}

export default async function Home({params}: Props) {
  const slug = params.product;
  console.log(slug);
  
  const product = await getProductData(slug);

  return (
    <main className="">
           <div >
                <h1>{product.title}</h1>
                <p>SKU: {product.sku}</p>
                <p>Price: {product.price}</p>
                <p>Product Details: {product.productDetails}</p>
                <Image src={urlFor(product.mainImage).url()} width={150} height={200} alt={product.mainImage.alt} />
                {/* <ul>
                  {product.productCare.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul> */}
                {/* <h2>Variants:</h2>
                {product.variantImages && product.variantImages.map((variantImage, index) => (
                  <div key={index}>
                    <img src={variantImage.asset._ref} alt={variantImage.alt} />
                    <p>{variantImage.caption}</p>
                  </div>
                ))} */}
              </div>
    </main>
  );
}
