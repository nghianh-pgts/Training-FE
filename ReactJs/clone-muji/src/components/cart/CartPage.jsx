import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartInfor from "./CartInfor";
import CartItemList from "./CartItemList";

const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const CartPage = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleStickyInfor = () => {
      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleStickyInfor);

    return () => {
      window.removeEventListener("scroll", handleStickyInfor);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 container mt-6">
      <h1 className="w-full text-[26px] font-bold text-left ">Giỏ hàng</h1>
      <div className="flex gap-4 bg-white">
        <CartItemList items={items} />

        <CartInfor isSticky={isSticky} />
      </div>
    </div>
  );
};

export default CartPage;
