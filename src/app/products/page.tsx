import { client } from "@/lib/sanityClient";

const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"]`);
  return res;
};

export default async function Home() {
      const data = await getProductData();
    //   console.log("Config", data);
    
      return (
        <main className="">
          male
        </main>
      );
    }
    