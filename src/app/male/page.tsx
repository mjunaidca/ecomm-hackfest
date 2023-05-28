import { client } from "@/lib/sanityClient";
import Product from "../../../type";
import urlFor from "@/lib/urlFor";
import Link from "next/link";
import Image from "next/image";

const getMaleProductData = async () => {
  const res = await client.fetch(`*[_type == "product" && category._ref == "6509571c-b4aa-45b2-9b28-ae441dba8b6d"]{
    ...,
    category[]->,
  }`);
  return res;
};

export default async function Home() {
  const data:Product[] = await getMaleProductData();
//   console.log("MALE TITLE", data[0].title);
//   console.log("MALE TITLE", data[0].productDetails);

  if(!data){
    return null;
  }

  return (
    <main className="">
        <div>
        {data.map((product, index) => (
              <div key={index}>
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
                <Link href={`./${product.slug.current}`} >View Product</Link>
              </div>
            ))}
        </div>
    </main>
  );
}
