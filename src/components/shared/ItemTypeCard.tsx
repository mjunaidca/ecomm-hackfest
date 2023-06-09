import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
interface IProps {
  mainImage: any;
  text: string;
  price: number;
  link: string;
}

const ItemTypeCard = ({ mainImage, text, price, link }: IProps) => {
  return (
    <Link href={link} className="hover:scale-105 duration-700">
      <Image
        src={urlForImage(mainImage).url()}
        alt="Header Image"
        width={400}
        height={700}
      />
      <h3 className="font-bold text0lg mt-3">{text}</h3>
      <p className="font-bold text-lg">${price}</p>
    </Link>
  );
};

export default ItemTypeCard;
