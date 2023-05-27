import { client } from "@/lib/sanityClient";

const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"][0]`);
  return res;
};

export default async function Home() {
  const data = await getProductData();
  console.log("Config", data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Initial Config
    </main>
  );
}
