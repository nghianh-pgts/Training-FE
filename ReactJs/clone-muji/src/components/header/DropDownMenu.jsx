import React from "react";

const DropDownMenu = ({ items, isOpen }) => {
  return (
    <div
      className={`absolute z-50 left-0 top-full bg-white rounded-lg p-5 w-[50vw] grid grid-cols-3  gap-5 transition-all duration-300 shadow-lg ${
        isOpen
          ? "opacity-100 visible scale-100"
          : "opacity-0 invisible scale-95"
      }`}
    >
      {items.subcategories.map((subcategory, index) => (
        <div key={index}>
          <h3 className="text-black font-semibold text-left cursor-pointer hover:text-[#80001c]">
            {subcategory.name}
          </h3>
          {subcategory.subcategoryProducts.map((product, idx) => (
            <p className="text-gray-600 text-left cursor-pointer hover:text-[#80001c]">
              {product.productName}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DropDownMenu;
