import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("vi");

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    setIsOpen(false); // Đóng menu sau khi chọn
  };

  return (
    <div className="relative flex items-center text-center px-10 py-3 primary-text-color container ">
      <div className="text-center flex flex-1 items-center justify-center text-[12px]">
        <p>Miễn phí vận chuyển cho mọi đơn hàng từ 999.000 VNĐ</p>
      </div>

      <div className="flex gap-4 items-center">
        <div
          className="relative cursor-pointer flex items-center gap-1 text-[15px] "
          onClick={handleOpen}
        >
          Tiếng Việt
          <button>
            <MdExpandMore />
          </button>
          {!isOpen && (
            <ul className="absolute bg-white top-[30px] right-0 w-32 shadow-lg rounded-md text-black z-[9999]">
              <li
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  currentLanguage === "vi" ? "font-bold" : ""
                }`}
                onClick={() => handleLanguageChange("vi")}
              >
                Tiếng Việt
              </li>
              <li
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  currentLanguage === "en" ? "font-bold" : ""
                }`}
                onClick={() => handleLanguageChange("en")}
              >
                English
              </li>
            </ul>
          )}
        </div>
        <div className="flex items-center gap-1">
          <FaUser />
          <Link to={"/login"}>
            <span className="font-semibold hover:cursor-pointer hover:underline">
              Đăng nhập &#124;
            </span>
          </Link>
          <Link to={"/register"}>
            <span className="font-semibold hover:cursor-pointer hover:underline">
              Đăng ký
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
