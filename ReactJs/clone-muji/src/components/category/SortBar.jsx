import React, { useEffect, useRef, useState } from "react";
import { FaSortAmountUp } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const SortBar = () => {
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className=" relative flex justify-between items-center gap-12 border border-gray-200 p-2 rounded-md cursor-pointer  "
      onClick={handleDropdown}
      ref={dropdownRef}
    >
      <span className="flex items-center">
        <FaSortAmountUp /> Sắp xếp theo:
      </span>
      <p className="font-bold">Gợi ý</p>
      <span>
        <MdExpandMore />
      </span>

      <div
        className={`absolute left-0 top-0 mt-12 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-500 translate-y-[-10px] ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"
        }`}
      >
        <ul className="text-sm">
          <li className="p-2  font-bold">Gợi ý</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">
            Giá thấp đến cao
          </li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">
            Giá cao đến thấp
          </li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Mới nhất</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Bán chạy</li>
        </ul>
      </div>
    </div>
  );
};

export default SortBar;
