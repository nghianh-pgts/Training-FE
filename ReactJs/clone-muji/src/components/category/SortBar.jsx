import React, { useState } from "react";
import { FaSortAmountUp } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const SortBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = (prev) => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className=" relative flex justify-between items-center gap-12 border border-gray-200 p-2 rounded-md"
      onClick={handleDropdown}
    >
      <span className="flex items-center">
        <FaSortAmountUp /> Sắp xếp theo:
      </span>
      <p className="font-bold">Gợi ý</p>
      <span>
        <MdExpandMore />
      </span>

      {!isOpen && (
        <div className="absolute left-0 top-0 mt-12 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="text-sm">
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Gợi ý</li>
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
      )}
    </div>
  );
};

export default SortBar;
