import { Button } from "../ui/button";

interface ICounter {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export function Counter({ quantity, setQuantity }: ICounter) {
  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decrement = () =>
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  return (
    <div className="flex items-center justify-center w-full space-x-3  ">
      <Button
        onClick={decrement}
        type="button"
        className="text-2xl w-8 h-8 bg-gray-200 p-1 rounded-full font-medium text-gray-500 hover:bg-gray-200 transition-colors"
      >
        -
      </Button>
      <span className="text-lg font-normal text-gray-500">{quantity}</span>{" "}
      <Button
        onClick={increment}
        type="button"
        className="text-2xl w-8 h-8 bg-white p-1 border hover:bg-gray-200 rounded-full border-gray-900 font-medium text-gray-500 hover:text-gray-900 transition-colors"
      >
        +
      </Button>
    </div>
  );
}
