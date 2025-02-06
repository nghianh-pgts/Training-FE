import React from "react";
import { IoMdClose } from "react-icons/io";
import MiniCartItem from "./MiniCartItem";

const MiniCart = ({ isShowMiniCart, handleShowMiniCart }) => {
  return (
    <div
      className={`${
        isShowMiniCart ? "absolute  w-20 md:top-[61px]" : "hidden"
      } bg-white  right-0 text-gray-800 shadow-lg md:w-[368px] p-6 z-10`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Giỏ hàng (22)</h1>
        <span className="text-2xl cursor-pointer" onClick={handleShowMiniCart}>
          <IoMdClose />
        </span>
      </div>
      <div className="flex-grow overflow-y-auto max-h-[400px] w-full flex flex-col my-3 py-2 border-y border-r-2 scrollbar-hide">
        <MiniCartItem />
        <MiniCartItem />
        <MiniCartItem />
        <MiniCartItem />
        <MiniCartItem />
        <MiniCartItem />
        <MiniCartItem />
        <MiniCartItem />
      </div>
      <div className="flex justify-between w-full py-[15px] text-[15px] border-b-2">
        <span className="text-gray-400">Tạm tính (22 mặt hàng)</span>
        <span className="font-bold">1.407.000 VND</span>
      </div>
      <div className="flex flex-col gap-2 w-full mt-3">
        <button className="w-full rounded-md py-3 border font-bold second-primary-bg-color text-white hover-primary-bg-color">
          Thanh toán
        </button>
        <button className="w-full rounded-md py-3 border font-bold">
          Xem giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default MiniCart;
