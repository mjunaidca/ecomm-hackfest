import { Button } from "@/components/ui/button";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import DeleteItem from "@/components/shared/DeleteItem";
import EditItemQuanity from "@/components/shared/EditItemQuanity";
import { Image as IImage } from "sanity";
import { getdbCartData } from "@/lib/dbCartData";
import StripeProductButton from "@/components/shared/StripeProductButton";
import product from "../../../sanity/lib/product";

interface IProduct {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
  title: string;
  mainImage: IImage;
  type: string;
  price: number;
  _id: string;
}

export default async function Home() {
  const querycartData: IProduct[] = await getdbCartData();

  if (!querycartData) return <div>No Products In Cart!</div>;

  const totalQuantity = querycartData.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = querycartData.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return (
    <main className="container min-h-screen pb-1 px-2 mb-8 sm:px-5 md:px-10 lg:px-12 xl:px-16 py-20">
      {/* Products In Cart */}
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Shopping Cart
      </h3>

      {querycartData && querycartData.length !== 0 ? (
        <div className="flex flex-col w-full lg:flex-row py-8 space-x-0 lg:space-x-4 xl:space-x-8 items-start justify-between">
          <div className="basis-auto md:w-full lg:basis-2/3 w-full">
            {querycartData.map((product: IProduct, index: any) => (
              <div key={index} className="flex flex-col sm:flex-row px-2 py-6">
                <div className="flex flex-col md:flex-row w-full lg:w-2/4  space-x-5">
                  <Image
                    src={urlFor(product.mainImage).url()}
                    width={200}
                    height={320}
                    alt={product.title}
                    className="max-h-[320px]   rounded-lg max-w-[200px] w-full object-cover"
                  />
                </div>
                {/* Heading And Delete */}
                <div className="flex w-full pt-3 sm:pt-0 lg:w-2/4 ">
                  <div className="flex w-full lg:w-1/2 flex-col space-y-5">
                    <h4 className="scroll-m-20 text-xl font-normal tracking-tight">
                      {product.title}
                    </h4>
                    <p className="text-lg text-muted-foreground">
                      {product.type}
                    </p>
                    <p className="text-base font-medium ">
                      Delivery Estimation
                    </p>
                    <p className="text-base font-medium  text-yellow-500">
                      5 Working Days
                    </p>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      ${product.price * product.quantity}
                    </h4>
                  </div>
                  {/* Delete and Order Count */}
                  <div className="w-full lg:w-1/2 flex justify-between items-end flex-col ">
                    <div className="hover:pointer-events-auto cursor-pointer">
                      <DeleteItem productId={product._id} />
                    </div>
                    <div>
                      <EditItemQuanity
                        QTY={product.quantity}
                        productId={product._id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Cart Summary */}
          <div className="basis-auto md:w-full mt-12 lg:mt-3  lg:basis-1/3 w-full p-6 bg-gray-100 ">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Order Summary
            </h4>{" "}
            <div className="flex justify-between  space-x-4items-center [&:not(:first-child)]:mt-6">
              <p className="leading-7 "> Quanity</p>
              <p className="leading-7 "> {totalQuantity} Product</p>
            </div>
            <div className="flex justify-between items-center space-x-4 [&:not(:first-child)]:mt-6 mb-3">
              <p className="leading-7 ">SubTotal</p>
              <p className="leading-7 ">$ {totalPrice}</p>
            </div>
            <StripeProductButton
              totalPrice={totalPrice}
              totalQuantity={totalQuantity}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <h1 className="scroll-m-20 pb-1  text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight transition-colors first:mt-0">
            Your shopping bag is empty.
          </h1>
        </div>
      )}
    </main>
  );
}
