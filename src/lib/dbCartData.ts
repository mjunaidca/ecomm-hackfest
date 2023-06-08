import { cookies } from "next/headers";
import { client } from "@/lib/sanityClient";
interface DBCart {
  id: string;
  product_id: string;
  quantity: number;
  user_id: string;
}
export async function getdbCartData() {
  const res = await fetch(
    `${process.env.Base_Url}/api/cart?user_id=${cookies().get("user_id")?.value
    }`
  );
  let data = await res.json();
  let cartData = data.res;

  // Extract product Ids from the cartData
  if (!cartData) return null;
  const productIds = cartData.map((item: DBCart) => item.product_id);

  // Fetch product details from Sanity
  const products = await client.fetch(
    `*[_type == 'product' && _id in $productIds]{
        price, 
        _id,
        title,
        mainImage,
        type,
        }`,
    { productIds }
  );

  if (!products) return null;

  // Merge product details with cartData
  cartData = cartData.map((item: DBCart) => {
    const productDetail = products.find(
      (product: any) => product._id === item.product_id
    );
    return { ...item, ...productDetail };
  });

  return cartData;
}