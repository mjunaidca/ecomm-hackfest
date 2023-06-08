import AddToCartForm from "@/components/shared/AddToCartForm";
import { client } from "@/lib/sanityClient";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { Image as IImage } from "sanity";

interface IProductSize {
  _key: string;
  _type: string;
  size: "XS" | "S" | "M" | "L" | "XL";
  quantity: number;
}

interface ICategory {
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
  title: string;
  _updatedAt: string;
  slug: ISlug;
}

interface ISlug {
  _type: string;
  current: string;
}

interface IAsset {
  _ref: string;
  _type: string;
}

interface IProduct {
  _rev: string;
  sku: string;
  sizes: IProductSize[];
  productCare: string[];
  type: string;
  _createdAt: string;
  productDetails: string;
  _id: string;
  mainImage: IImage;
  category: ICategory;
  slug: ISlug;
  _updatedAt: string;
  _type: string;
  title: string;
  price: number;
  variantImages?: IImage[];
}

const getProductData = async (slug: string) => {
  const res =
    await client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]{
    ...,
    category->}`);
  return res;
};

interface Props {
  params: {
    product: string;
  };
}

export default async function Home({ params }: Props) {
  const slug = params.product;

  const product: IProduct = await getProductData(slug);
  console.log(product);

  if (!product) {
    return <div>No products Found!</div>;
  }

  return (
    <main className="container flex flex-col min-w-full min-h-screen bg-slate-50 py-12 ">
      {/* Product Image  */}
      <section className="flex flex-col lg:flex-row h-full mb-20 ">
        {/* Image */}
        <div className="lg:basis-3/5 flex basis-full space-x-10">
          <div className="w-[15%] space-y-5 ">
            <div>
              <Image
                src={urlFor(product.mainImage).url()}
                width={135}
                height={150}
                alt={product.slug.current}
                className="max-h-[150px] max-w-[135px] w-full object-cover"
              />
            </div>
            <div>
              {product.variantImages &&
                product.variantImages.map((variantImage: any, index: any) => (
                  <div key={index}>
                    <Image
                      src={urlFor(variantImage.image).url()}
                      alt={variantImage.alt}
                      width={134}
                      height={143}
                      className="max-h-[150px] max-w-[135px] w-full object-cover"
                    />
                    <p>{variantImage.caption}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="w-[85%]">
            <Image
              src={urlFor(product.mainImage).url()}
              width={578}
              height={520}
              alt={product.title}
              className="max-h-screen max-w-full w-full object-cover"
            />
          </div>
        </div>
        {/* Checkout Details */}
        <div className="lg:basis-2/5 basis-full py-16 px-2 lg:px-5 xl:px-8 space-y-8">
          {/* Heading */}
          <div>
            <h2 className="scroll-m-20 pb-1  text-2xl lg:text-3xl xl:text-4xl font-normal tracking-tight transition-colors first:mt-0">
              {product.title}
            </h2>
            <h3 className="scroll-m-20 text-xl xl:text-2xl  font-semibold text-gray-400 tracking-tight">
              {product.type}
            </h3>
          </div>
          {/* Order Form */}
          <>
            <AddToCartForm product={product} />
          </>
        </div>
      </section>

      {/* Product Description */}
      <section className="flex flex-col bg-white  p-7 md:p-10">
        {/* Header */}
        <div className="relative flex items-center py-7 md:py-10">
          <p className="absolute text-gray-100 z-10 font-bold text-[72px] sm:text-[92px] lg:text-[118px]">
            Overview
          </p>

          <h2 className="scroll-m-20 pb-1 text-xl lg:text-2xl font-semibold tracking-tight transition-colors first:mt-0 z-20">
            Product Information
          </h2>
        </div>

        <hr className="border-gray-200 border-t-2 my-4" />

        {/* Details */}
        <div className="flex justify-between py-5">
          <div className="basis-1/3 w-full">
            <h4 className="scroll-m-20 text-lg text-gray-500 font-semibold tracking-tight">
              PRODUCT DETAILS:
            </h4>
          </div>
          <div className="basis-2/3 w-full">
            <p className="leading-7 text-justify [&:not(:first-child)]:mt-6">
              {product.productDetails}
            </p>
          </div>
        </div>

        {/* Care */}
        <div className="flex justify-between py-5">
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
              {product.productCare.map((instruction: any, index: any) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
