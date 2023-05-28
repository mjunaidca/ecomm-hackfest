import { client } from "@/lib/sanityClient";

const getMaleProductData = async () => {
  const res = await client.fetch(`*[_type == "product" && category._ref == "6509571c-b4aa-45b2-9b28-ae441dba8b6d"]{
    ...,
    category[]->,
  }`);
  return res;
};

export default async function Home() {
  const data = await getMaleProductData();
//   console.log("MALE", data);

  return (
    <main className="">
      male
    </main>
  );
}
