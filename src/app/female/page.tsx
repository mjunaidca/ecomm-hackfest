import { client } from "@/lib/sanityClient";

const getFeMaleProductData = async () => {
  const res = await client.fetch(`*[_type == "product" && category._ref == "e4b55627-d573-459e-b0ff-215748fb3bda"]{
    ...,
    category[]->,
  }`);
  return res;
};

const page = async()=> {
    const data = await getFeMaleProductData();
  console.log("FEMALE", data);
return (
    <div></div>
)
}

export default page;