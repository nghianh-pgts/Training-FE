import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../ui/PrimaryButton";

const CartInfor = ({ isSticky }) => {
  return (
    <div
      className={`${
        isSticky ? "sticky top-[120px]" : ""
      } hidden md:w-[30%] md:flex md:flex-col p-5 bg-[#f5f5f5] flex-shrink-0 max-h-[500px]`}
    >
      <h2 className="font-bold text-left mb-6 text-xl">
        Thông tin đơn hàng (22)
      </h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-500 font-semibold">
            Tạm tính (22 mặt hàng)
          </h3>
          <span>1.407.000 VND</span>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-gray-500 font-semibold">Phí vận chuyển</h3>
          <span>Miễn phí giao hàng</span>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-gray-500 font-semibold">Tổng khuyến mãi</h3>
          <span>0 VND</span>
        </div>
        <div className="w-full flex mt-2 pb-5 border-b-2">
          <input
            type="text"
            placeholder="Mã giảm giá"
            className="w-[70%] py-2 px-3 border focus-visible:outline-none"
          />
          <button className="w-[30%] p-2 second-primary-bg-color hover-primary-bg-color font-semibold">
            Áp dụng
          </button>
        </div>
        <div className="flex justify-between items-start">
          <h3 className="second-primary-text-color font-bold">Tổng tiền</h3>
          <span className="second-primary-text-color font-bold flex-flex-col">
            <div>1.407.000 VND</div>
            <span className="font-normal">(đã bao gồm VAT)</span>
          </span>
        </div>
        <div className="flex flex-col gap-5 w-full py-3">
          <PrimaryButton
            className={"second-primary-bg-color hover-primary-bg-color"}
            text="Thanh toán"
          />
          <p className="font-bold second-primary-text-color underline cursor-pointer">
            <Link to={"/"}>Tiếp tục mua hàng</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartInfor;
