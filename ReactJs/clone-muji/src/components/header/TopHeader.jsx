import React from "react";
import { FaUser } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="flex items-center text-center px-10 py-3 primary-text-color container mx-[3rem]">
      <div className="text-center flex flex-1 items-center justify-center text-[12px]">
        <p>Miễn phí vận chuyển cho mọi đơn hàng từ 999.000 VNĐ</p>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-1 text-[15px]">
          Tiếng Việt
          <button>
            <MdExpandMore />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <FaUser />
          <span className="font-semibold hover:cursor-pointer hover:underline">
            Đăng nhập &#124;
          </span>
          <span className="font-semibold hover:cursor-pointer hover:underline">
            Đăng ký
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
