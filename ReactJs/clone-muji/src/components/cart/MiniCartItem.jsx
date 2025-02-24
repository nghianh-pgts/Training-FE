import React from "react";
import QuantitySelector from "../product/QuantitySelector";

const MiniCartItem = ({
  productName,
  productImage,
  productPrice,
  productQuantity,
}) => {
  return (
    <div className="flex gap-4  border-b-2 max-w-full py-4">
      <div className="w-[96px] h-[96px]">
        <img className="object-cover" src={productImage} alt="" />
      </div>
      <div className="flex flex-col gap-1 text-[13px] text-left">
        <p className="max-h-36px font-bold leading-[18px] break-words line-clamp-2">
          {productName}
        </p>
        <p>
          <span className="font-bold">{productPrice}</span> VND
        </p>
        <QuantitySelector
          className="w-6 h-6 hover-primary-bg-color"
          initQuantity={productQuantity}
        />
      </div>
    </div>
  );
};

export default MiniCartItem;
