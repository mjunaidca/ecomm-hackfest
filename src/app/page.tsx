import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import { Promotions } from "@/views/Promotions";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen container  space-y-6">
      {" "}
      {/* Hero */}
      <Hero />
      {/* Promotions Event */}
      <Promotions />
      {/* Featured Product */}
      <ProductList />
      {/* Product Overview */}
      {/* Email Subscription */}
    </main>
  );
}
