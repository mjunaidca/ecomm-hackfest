import Hero from "@/views/Hero";
import NewsLetter from "@/views/NewsLetter";
import ProductList from "@/views/ProductList";
import { Promotions } from "@/views/Promotions";
import VintageProductOverview from "@/views/VintageProductOverview";

export default async function Home() {
  console.log("Github Actions Test");

  return (
    <main className="flex flex-col min-h-screen container  space-y-6">
      {" "}
      {/* Hero */}
      <Hero />
      {/* Promotions Event */}
      <Promotions />
      {/* Featured Product */}
      {/* @ts-expect-error */}
      <ProductList />
      {/* Product Overview */}
      <VintageProductOverview />
      {/* Email Subscription */}
      <NewsLetter />
    </main>
  );
}
