import ItemTypeCard from "@/components/shared/ItemTypeCard";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";

const getProductData = async () => {
  const res =
    await client.fetch(`*[_type == "product" && category->title == "Female"]{
    price, 
    _id,
    title,
    mainImage,
    type,
    slug,
    category->{
      title
    }
  }[0..2]`);
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
  slug: {
    current: string;
  };
}

const ProductList = async () => {
  const data: IProduct[] = await getProductData();

  return (
    <section className="w-full  py-9 sm:py-9 lg:py-12 ">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-sm text-blue-700 font-bold tracking-wider">
          {" "}
          PRODUCTS
        </h4>
        <h2 className="scroll-m-20 text-3xl font-bold tracking-wider transition-colors first:mt-0 pt-3 ">
          Check What We Have:
        </h2>
      </div>
      <div className="pt-6 lg:pt-16 flex flex-col lg:flex-row overflow-hidden overflow-y-hidden   items-center justify-between space-y-4 lg:space-y-0  space-x-0 lg:space-x-7">
        {data.map((product) => {
          return (
            <div
              key={product._id}
              className="py-6 hover:z-40 hover:scale-105 duration-100"
            >
              <ItemTypeCard
                link={`/${product.slug.current}`}
                price={product.price}
                text={product.title}
                mainImage={product.mainImage}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
