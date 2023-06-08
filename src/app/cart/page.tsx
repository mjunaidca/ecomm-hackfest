import { client } from "@/lib/sanityClient";
import { Button } from "@/components/ui/button";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import DeleteItem from "@/components/shared/DeleteItem";
import { cookies } from "next/headers";
import EditItemQuanity from "@/components/shared/EditItemQuanity";
import { Image as IImage } from "sanity";

interface DBCart {
  id: string;
  product_id: string;
  quantity: number;
  user_id: string;
}
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

export async function getdbCartData() {
  const res = await fetch(
    `${process.env.Base_Url}/api/cart?user_id=${
      cookies().get("user_id")?.value
    }`
  );
  let data = await res.json();
  let cartData = data.res;

  // Extract product Ids from the cartData
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

  // Merge product details with cartData
  cartData = cartData.map((item: DBCart) => {
    const productDetail = products.find(
      (product: any) => product._id === item.product_id
    );
    return { ...item, ...productDetail };
  });

  return cartData;
}

export default async function CartPage() {
  const querycartData: IProduct[] = await getdbCartData();
  // console.log(querycartData);

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
        <div className="flex py-6 flex-wrap sm:flex-nowrap items-start justify-between">
          <div className="basis-2/3 w-full">
            {querycartData.map((product: IProduct, index: any) => (
              <div key={index} className="flex py-6">
                <div className="flex w-3/4  space-x-5">
                  <Image
                    src={urlFor(product.mainImage).url()}
                    width={200}
                    height={320}
                    alt={product.title}
                    className="max-h-[320px]   rounded-lg max-w-[200px] w-full object-cover"
                  />
                  {/* Heading */}
                  <div className="flex w-full flex-col space-y-5">
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
                </div>
                {/* Delete and Order Count */}
                <div className="w-1/4 flex justify-between items-end flex-col ">
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
            ))}
          </div>
          {/* Cart Summary */}
          <div className="w-full p-6 bg-gray-100 sm:w-auto">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Order Summary
            </h4>{" "}
            <div className="flex justify-between  space-x-4items-center [&:not(:first-child)]:mt-6">
              <p className="leading-7 "> Quanity</p>
              <p className="leading-7 "> {totalQuantity} Product</p>
            </div>
            <div className="flex justify-between items-center space-x-4 [&:not(:first-child)]:mt-6">
              <p className="leading-7 ">SubTotal</p>
              <p className="leading-7 ">$ {totalPrice}</p>
            </div>
            <Button className="rounded-none px-10 [&:not(:first-child)]:mt-6">
              {" "}
              Process to checkout{" "}
            </Button>
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
