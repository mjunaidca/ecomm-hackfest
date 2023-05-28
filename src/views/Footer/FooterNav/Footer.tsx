import LOGO from "@/assets/LOGO.png";
import Image from "next/image";
import Link from "next/link";
import { fooComp, fooContact, fooSupport } from "@/lib/data/footer";

const Footer = () => {
  return (
    <div className="flex flex-col  lg:flex-row container items-start py-6 md:py-7 px-4 sm:px-8 md:px-12 lg:px-16 mx-auto justify-between  ">
      {/* Logo */}
      <div className=" basis-2/5 px-4 mt-7">
        <Link href="/">
          <Image src={LOGO} alt="Dine Marketplace" className="h-6 w-36" />
        </Link>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-md">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="py-7">;</div>
        <div className="flex  items-center justify-center space-x-4"></div>
      </div>
      <div className="basis-1/5 px-4 ">
            <h4 className="scroll-m-20 py-5 md:pb-5  text-xl text-gray-600 font-semibold tracking-tight">
          {fooComp.label}
        </h4>
        <div className="space-y-4  ">
          {fooComp.data.map((value) => (
            <div key={value.title} className="text-gray-800 font-medium">
              <Link href={value.path}>{value.title}</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="basis-1/5 px-4  ">
        <h4 className="scroll-m-20 text-xl py-5 md:pb-5 font-semibold text-gray-600 tracking-tight">
          {fooContact.label}
        </h4>{" "}
        <div className="space-y-4  ">
          {fooContact.data.map((value) => (
            <div key={value.title} className="text-gray-800 font-medium">
              <Link href={value.path}>{value.title}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="basis-1/5 px-4 ">
        <h4 className="scroll-m-20 text-xl py-5 md:pb-5 font-semibold text-gray-600 tracking-tight">
          {fooSupport.label}
        </h4>
        <div className="space-y-4 ">
          {fooSupport.data.map((value) => (
            <div key={value.title} className="text-gray-800 font-medium">
              <Link href={value.path}>{value.title}</Link>
            </div>
          ))}
        </div>
      </div>
 
    </div>
  );
};

export default Footer;
