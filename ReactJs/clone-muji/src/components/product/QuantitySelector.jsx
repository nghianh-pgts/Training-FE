import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function QuantitySelector({
  className = "w-10 h-10 text-lg",
  initQuantity = 1,
  productId,
  onQuantityChange,
}) {
  const [quantity, setQuantity] = useState(initQuantity);
  const { user } = useAuth();

  const increase = async () => {
    // setQuantity((prev) => prev + 1);
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onQuantityChange) onQuantityChange(newQuantity);
  };
  const decrease = () => {
    // setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    const newQuantity = quantity > 1 ? quantity - 1 : 1;
    setQuantity(newQuantity);
    if (onQuantityChange) onQuantityChange(newQuantity);
  };

  useEffect(() => {
    console.log("gia tri moi cua quantity", quantity);
  }, [quantity]);

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
