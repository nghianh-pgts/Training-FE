import React from "react";
import { FaOpencart, FaRegHeart, FaRegStar } from "react-icons/fa";
import { PiAddressBookTabsFill } from "react-icons/pi";

const menuItem = [
  {
    title: "Đơn hàng",
    Icon: <FaOpencart />,
    url: "",
  },
  {
    title: "Danh sách địa chỉ",
    Icon: <PiAddressBookTabsFill />,
    url: "",
  },
  {
    title: "Danh sách yêu thích",
    Icon: <FaRegHeart />,
    url: "",
  },
];

const UserInfoMenu = () => {
  return (
    <div className="hidden md:w-[30%] lg:min-w-[25%] py-5 px-5 md:flex flex-col gap-2 text-left border rounded-md ">
      <h2 className="font-bold primary-text-color border-b pb-2">
        Thông tin tài khoản
      </h2>
      <ul className="flex flex-col gap-2 pb-2 border-b">
        {menuItem.map((item) => (
          <li className="hover-primary-text-color flex gap-2 items-center">
            {item.Icon} {item.title}
          </li>
        ))}
      </ul>
      <p className="hover-primary-text-color flex gap-2 items-center">
        <FaRegStar />
        Đánh giá
      </p>
    </div>
  );
};

export default UserInfoMenu;
