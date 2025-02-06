import React from "react";
import QuantitySelector from "../product/QuantitySelector";

const MiniCartItem = () => {
  return (
    <div className="flex gap-4  border-b-2 max-w-full py-4">
      <div className="w-[96px] h-[96px]">
        <img
          className="object-cover"
          src="https://api.muji.com.vn/media/catalog/product/cache/e272aad8b9caabcd658db26974414701/s/o/socola_h_t_h_nh_nh_n_4.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 text-[13px] text-left">
        <p className="max-h-36px font-bold leading-[18px] break-words line-clamp-2">
          Lorem, ipsum dolor sit amet consectetur
        </p>
        <p>
          <span className="font-bold">78.000</span> VND
        </p>
        <QuantitySelector className="w-6 h-6 hover-primary-bg-color" />
      </div>
    </div>
  );
};

export default MiniCartItem;
