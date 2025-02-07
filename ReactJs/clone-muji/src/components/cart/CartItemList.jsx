import React from "react";
import CartItem from "./CartItem";

const CartItemList = ({ items }) => {
  return (
    <div className="w-[100%] md:w-[70%] ">
      <div className="flex justify-between font-bold capitalize pb-6 border-b-2">
        <span>mặt hàng (22)</span>
        <span>Tạm tính</span>
      </div>
      <div className="py-3 flex flex-col gap-6">
        {items.map((id) => (
          <CartItem />
        ))}
      </div>
    </div>
  );
};

export default CartItemList;
