import LOGO from "@/assets/LOGO.png";
import Image from "next/image";
import Link from "next/link";
import { fooComp, fooContact, fooSupport } from "@/lib/data/footer";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col  lg:flex-row container items-start  justify-between mb-6 md:mb-12 py-6 md:py-3 ">
      {/* Logo */}
      <div className=" basis-2/5 mt-5 py-5 md:pb-5 ">
        <Link href="/" className="">
          <Image src={LOGO} alt="Dine Marketplace" className="h-6 w-36" />
        </Link>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-md">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="py-7 flex space-x-4">
          <div className="text-xl bg-gray-100 rounded-lg p-3 cursor-pointer hover:text-gray-800">
            <FaFacebookF className="text-gray-900" />
          </div>
          <div className="text-xl bg-gray-100 rounded-lg p-3 cursor-pointer hover:text-gray-800">
            <FaTwitter className="text-gray-900" />
          </div>
          <div className="text-xl bg-gray-100 rounded-lg p-3 cursor-pointer hover:text-gray-800">
            <FaLinkedinIn className="text-gray-900" />
          </div>
        </div>

        <div className="flex  items-center justify-center space-x-4"></div>
      </div>
      <div className="basis-1/5">
        <h4 className="scroll-m-20 text-xl mt-5 py-5 md:pb-5 font-semibold text-gray-500 tracking-tight">
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

      <div className="basis-1/5  ">
        <h4 className="scroll-m-20 text-xl mt-5 py-5 md:pb-5 font-semibold text-gray-500 tracking-tight">
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
      <div className="basis-1/5 ">
        <h4 className="scroll-m-20 text-xl mt-5 py-5 md:pb-5 font-semibold text-gray-500 tracking-tight">
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
