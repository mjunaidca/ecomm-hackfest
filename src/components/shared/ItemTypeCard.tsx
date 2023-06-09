import Image from "next/image";

interface IProps {
  Image: any;
  text: string;
  price: number;
}

const ItemTypeCard = ({ Image, text, price }: IProps) => {
  return (
    <div>
      <Image src={Image} alt="Header Image" />
      <h3 className="font-bold text0lg mt-3">{text}</h3>
      <p className="font-bold text-lg">${price}</p>
    </div>
  );
};

export default ItemTypeCard;
