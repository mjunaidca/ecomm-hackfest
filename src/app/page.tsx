import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen container  space-y-6">
      {" "}
      {/* Hero */}
      <Hero />
      {/* Promotions Event */}
      {/* Featured Product */}
      <ProductList />
      {/* Product Overview */}
      {/* Email Subscription */}
    </main>
  );
}
