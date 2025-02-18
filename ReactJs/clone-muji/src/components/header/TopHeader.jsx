import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdExpandMore, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LuUser } from "react-icons/lu";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("vi");
  const { user, logout } = useAuth();

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    setIsOpen(false); // Đóng menu sau khi chọn
  };

  return (
    <div className="relative flex items-center text-center px-10 py-3 primary-text-color container z-20">
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
          {!isOpen && <></>}
        </div>
        <div className="flex items-center gap-1">
          <FaUser />
          {user ? (
            <div className="flex gap-3 items-center">
              <span className="font-semibold">Chào, {user.fullName}</span>
              <button onClick={logout} className="primary-text-color">
                <MdLogout />
              </button>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
