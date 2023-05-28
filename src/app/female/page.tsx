import { client } from "@/lib/sanityClient";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import Product from "../../../type";

const getFeMaleProductData = async () => {
  const res = await client.fetch(`*[_type == "product" && category._ref == "e4b55627-d573-459e-b0ff-215748fb3bda"]{
    ...,
    category[]->,
  }`);
  return res;
};

const page = async()=> {
    const data:Product[] = await getFeMaleProductData();
//   console.log("FEMALE", data);
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

export default page;