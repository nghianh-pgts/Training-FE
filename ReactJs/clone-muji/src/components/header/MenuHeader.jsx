import React, { useState } from "react";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import DropDownMenu from "./DropDownMenu";

const menuItems = [
  { title: "Hàng mới", subcategories: [] },
  { title: "Bán chạy", subcategories: [] },
  {
    title: "Quần áo",
    subcategories: [
      {
        name: "Trang phục nữ",
        link: "#",
        subcategoryProducts: [
          { productName: "Áo thun trắng", productLink: "#" },
          { productName: "Áo thun đen", productLink: "#" },
        ],
      },
      {
        name: "Trang phục nam",
        link: "#",
        subcategoryProducts: [
          { productName: "Quần dài nam", productLink: "#" },
          { productName: "Quần dài nữ", productLink: "#" },
        ],
      },
      {
        name: "Trang phục trẻ em",
        link: "#",
        subcategoryProducts: [
          { productName: "Quần dài nam", productLink: "#" },
          { productName: "Quần dài nữ", productLink: "#" },
        ],
      },
      {
        name: "Túi",
        link: "#",
        subcategoryProducts: [
          { productName: "Quần dài nam", productLink: "#" },
          { productName: "Quần dài nữ", productLink: "#" },
        ],
      },
      {
        name: "Giày & dép",
        link: "#",
        subcategoryProducts: [
          { productName: "Quần dài nam", productLink: "#" },
          { productName: "Quần dài nữ", productLink: "#" },
        ],
      },
      {
        name: "Phụ kiện",
        link: "#",
        subcategoryProducts: [
          { productName: "Quần dài nam", productLink: "#" },
          { productName: "Quần dài nữ", productLink: "#" },
        ],
      },
    ],
  },
  {
    title: "Sức khỏe & làm đẹp",
    subcategories: [
      {
        name: "Mỹ phẩm",
        link: "#",
        subcategoryProducts: [
          { productName: "Son môi", productLink: "#" },
          { productName: "Kem dưỡng da", productLink: "#" },
        ],
      },
      {
        name: "Dụng cụ chăm sóc",
        link: "#",
        subcategoryProducts: [
          { productName: "Máy rửa mặt", productLink: "#" },
          { productName: "Bàn chải đánh răng", productLink: "#" },
        ],
      },
    ],
  },
  {
    title: "Gia dụng",
    subcategories: [
      {
        name: "Nội thất",
        link: "#",
        subcategoryProducts: [
          { productName: "Bàn ăn", productLink: "#" },
          { productName: "Ghế sofa", productLink: "#" },
        ],
      },
      {
        name: "Nhà bếp",
        link: "#",
        subcategoryProducts: [
          { productName: "Nồi cơm điện", productLink: "#" },
          { productName: "Chảo chống dính", productLink: "#" },
        ],
      },
    ],
  },
  {
    title: "Thực phẩm",
    subcategories: [
      {
        name: "Đồ khô",
        link: "#",
        subcategoryProducts: [
          { productName: "Mì gói", productLink: "#" },
          { productName: "Gạo", productLink: "#" },
        ],
      },
      {
        name: "Đồ tươi",
        link: "#",
        subcategoryProducts: [
          { productName: "Rau củ", productLink: "#" },
          { productName: "Thịt gà", productLink: "#" },
        ],
      },
    ],
  },
];

const MenuHeader = ({ isSticky }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div
      className={`primary-bg-color transition-all duration-500 ${
        isSticky ? "fixed top-0 left-0 w-full z-50 " : ""
      }`}
    >
      <div className="container">
        <div className="flex lg:py-5 text-white ">
          <div className="flex items-center gap-2 ">
            <span className="text-2xl cursor-pointer hidden">
              <IoMdMenu />
            </span>
            <img
              className="mr-5 max-h-10 lg:max-h-[52px]"
              src="https://api.muji.com.vn/media/logo/stores/1/MUJI_Box-header.png"
              alt="ảnh"
            />
          </div>

          <div className="flex items-center">
            {menuItems.map((item, index) => (
              <div
                className="relative"
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <p className="menu-item-style">{item.title}</p>
                {<DropDownMenu items={item} isOpen={hoverIndex === index} />}
              </div>
            ))}
          </div>

          <div className="flex items-center flex-1 gap-2">
            <div className="flex-1 bg-white flex justify-between items-center px-2 py-1 rounded-md">
              <div>
                <CiSearch className="text-black text-xl" />
              </div>
              <input
                type="text"
                className="w-full rounded-md text-gray-800 focus:outline-none"
                placeholder="Bạn đang muốn tìm kiếm gì?"
              />
              <div>
                <IoMdClose className="text-black  text-xl" />
              </div>
            </div>

            <button className="text-2xl cursor-pointer">
              <LiaCartPlusSolid />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
