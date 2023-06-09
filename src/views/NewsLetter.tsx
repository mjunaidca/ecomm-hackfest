import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  return (
    <section className="w-full  py-16 sm:py-9 lg:py-16 ">
      <h2 className="scroll-m-20 flex item-center justify-center text-3xl font-bold tracking-wider transition-colors first:mt-0 mb-6 z-40">
        Subscribe Our Newsletter
      </h2>
      <div className="relative flex items-center justify-center">
        <p className="absolute text-gray-100 z-10 font-bold text-[72px] sm:text-[92px] lg:text-[118px]">
          Newsletter
        </p>

        <div className="flex flex-col w-full justify-center items-center">
          <p className="leading-7 [&:not(:first-child)]:mt-1 z-20">
            Get the latest information and promo offers directly
          </p>
        </div>
      </div>

      <div className="flex item-center justify-center space-x-4 mt-8 ">
        <Input
          type="email"
          placeholder="Input your email"
          className="max-w-xs z-40 rounded-none"
        />
        <Button type="submit" className="z-40 rounded-none">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default NewsLetter;
