import { cookies } from "next/headers";
import { client } from "@/lib/sanityClient";
import CartItemsCard from "@/components/shared/CartItemsCard";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
}

type ProductList = Product[];

async function getCartData() {
  const res = await fetch(
    `${process.env.Base_Url}/api/cart?user_id=${
      cookies().get("user_id")?.value
    }`
  );
  const data = await res.json();
  return data;
}

function getProductIds(cartData: any[]): string[] {
  return cartData.map((item) => item.product_id);
}

async function getCartProductDetails(productIds: string[]) {
  const products = await client.fetch(
    `*[_type == 'product' && _id in $productIds]`,
    { productIds }
  );

  return products;
}

export default async function CartPage() {
  const querycartData = await getCartData();
  const cartData: ProductList = querycartData.res;

  const productIds = getProductIds(cartData);

  const productDetails: Product[] = await getCartProductDetails(productIds);

  return (
    <main className="container min-h-screen pb-1 px-2 mb-8 sm:px-5 md:px-10 lg:px-12 xl:px-16 py-20">
      {/* Products In Cart */}
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Products In Cart
      </h3>
      <div className="flex py-6 flex-wrap sm:flex-nowrap items-start justify-between">
        <div className="basis-2/3 w-full">
          {productDetails.map((product: any, index: any) => (
            <div
              key={index}
              className="transition-transform duration-700 hover:scale-105"
            >
              <CartItemsCard product={product} />
            </div>
          ))}
        </div>
        {/* Cart Summary */}
        <div className="w-full p-6 bg-gray-100 sm:w-auto">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Order Summary
          </h4>
          <div className="flex justify-between  space-x-4items-center [&:not(:first-child)]:mt-6">
            <p className="leading-7 ">Quanity</p>
            <p className="leading-7 ">Products</p>
          </div>
          <div className="flex justify-between items-center space-x-4 [&:not(:first-child)]:mt-6">
            <p className="leading-7 ">SubTotal</p>
            <p className="leading-7 ">$</p>
          </div>
          <Button className="rounded-none px-10 [&:not(:first-child)]:mt-6">
            {" "}
            Process to checkout{" "}
          </Button>
        </div>
      </div>
    </main>
  );
}
