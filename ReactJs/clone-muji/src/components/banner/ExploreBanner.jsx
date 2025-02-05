import React from "react";

const ExploreBanner = () => {
  return (
    <div className="flex items-center container w-full">
      <img
        src="https://api.muji.com.vn/media/catalog/category/VN.png"
        alt=""
        className="w-[60%] object-cover"
      />
      <div className="flex flex-col items-center">
        <p>
          Đón chào mùa mới theo phong cách riêng với bộ sưu tập áo, quần, và
          nhiều sản phẩm khác dành đến từ MUJI
        </p>
        <button className="font-bold px-10 py-2 mt-2 text-white bg-[#3c3c43] rounded text-sm">
          Khám phá thêm
        </button>
      </div>
    </div>
  );
};

export default ExploreBanner;
