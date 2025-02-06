import { useState } from "react";

export default function QuantitySelector({ className = "w-10 h-10 text-lg" }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={decrease}
        className={`${className} rounded-md bg-gray-300 flex items-center justify-center  font-bold`}
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className={`${className} text-center border border-gray-400 rounded-md`}
      />
      <button
        onClick={increase}
        className={`${className} rounded-md bg-gray-300 flex items-center justify-center  font-bold`}
      >
        +
      </button>
    </div>
  );
}
