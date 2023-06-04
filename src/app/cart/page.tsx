import { cookies } from "next/headers";
import { client } from "@/lib/sanityClient";
import CartItemsCard from "@/components/shared/CartItemsCard";

interface Product {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
}

type ProductList = Product[];

export async function getCartData() {
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

export async function getCartProductDetails(productIds: string[]) {
  const products = await client.fetch(
    `*[_type == 'product' && _id in $productIds]`,
    { productIds }
  );

  return products;
}

const CartPage = async () => {
  const querycartData = await getCartData();
  const cartData: ProductList = querycartData.res;

  const productIds = getProductIds(cartData);

  const productDetails: Product[] = await getCartProductDetails(productIds);

  return (
    <main className="container flex items-start justify-between min-h-screen">
      {/* Products In Cart */}
      <div>
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
      <div>Cart Summary</div>
    </main>
  );
};

export default CartPage;
