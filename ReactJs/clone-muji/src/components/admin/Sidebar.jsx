import { IconButton } from "@mui/material";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import AccordionMenu from "./AccordionMenu";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    {
      title: "Danh mục",
      items: ["Quản lý danh mục"],
      url: "/admin/categories",
    },
    {
      title: "Sản phẩm",
      items: ["Quản lý sản phẩm (sản phẩm có nhiều hình ảnh)"],
      url: "/admin/products",
    },
    {
      title: "Tài khoản",
      items: ["Quản lý tài khoản"],
      url: "/admin/accounts",
    },

    { title: "Đơn hàng", items: ["Quản lý đơn hàng"], url: "/admin/orders" },
    {
      title: "Thanh toán",
      items: ["Quản lý thanh toán"],
      url: "/admin/payments",
    },
    {
      title: "Đánh giá",
      items: ["Quản lý đánh giá"],
      url: "/admin/votes",
    },
    {
      title: "Vận chuyển",
      items: ["Quản lý vận chuyển"],
      url: "/admin/delivery",
    },
    {
      title: "Khuyến mãi",
      items: ["Quản lý khuyến mãi"],
      url: "/admin/categories",
    },
  ];

  return (
    <div
      className={`second-primary-bg-color dark:bg-gray-900  h-screen p-2 transition-all duration-300 ${
        isOpen ? "w-72 " : "w-12"
      }`}
    >
      {/* Nút đóng/mở sidebar */}
      <div className="flex justify-end text-gray-300 ">
        <IconButton onClick={toggleSidebar}>
          <IoMdMenu className="text-white  dark:text-gray-300" />
        </IconButton>
      </div>
      {/* Chỉ hiển thị menu nếu sidebar đang mở */}
      {isOpen && (
        <div className="mt-4 space-y-2">
          {menuItems.map((menu, index) => (
            <AccordionMenu key={index} title={menu.title} items={menu.items} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
