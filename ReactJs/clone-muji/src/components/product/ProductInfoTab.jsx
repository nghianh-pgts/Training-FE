import React, { useState } from "react";

const ProductInfoTab = ({ description, specs }) => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div className="w-full flex flex-col mt-10">
      <div className="flex w-full border-b">
        <button
          className={`w-[50%] font-semibold ${
            activeTab === "description" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Mô tả sản phẩm
        </button>
        <button
          className={`w-[50%] font-bold ${
            activeTab === "specs" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveTab("specs")}
        >
          Thông số kỹ thuật/Kích thước
        </button>
      </div>
      <div className="p-4">
        {activeTab === "description" && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            illo. Explicabo eos, excepturi eius, libero hic, ullam incidunt
            accusamus ab tempore inventore quaerat ex. Voluptatibus dolores
            numquam dignissimos. Cumque, fugit?
          </p>
        )}
        {activeTab === "specs" && <p>Các thông số kỹ thuật...</p>}
      </div>
    </div>
  );
};

export default ProductInfoTab;
