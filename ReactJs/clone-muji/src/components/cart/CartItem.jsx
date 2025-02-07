import React from "react";
import MiniCartItem from "./MiniCartItem";
import FavoriteButton from "../ui/FavoriteButton";
import QuantitySelector from "../product/QuantitySelector";

const CartItem = ({
  productName,
  productImage,
  productPrice,
  productQuantity,
}) => {
  return (
    <div className="flex w-full pb-5 border-b-2 gap-3">
      <div className="w-[105px] h-[105px] lg:w-[184px] lg:h-[184px] max-h-[105px] lg:max-h-[184px] overflow-hidden flex-shrink-0">
        <img
          src="https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/s/o/socola_h_t_h_nh_nh_n_4.jpg"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="second-primary-text-color font-bold">
            Sô cô la Yuzu phủ hạt hạnh nhân hạt điều 75g MUJI
          </p>
          <span>
            <FavoriteButton />
          </span>
        </div>
        <p className="w-full text-left second-primary-text-color font-bold">
          76.000 <span className="font-normal">VND</span>
        </p>
        <div className="flex justify-between items-start">
          <QuantitySelector />
          <div className="flex flex-col text-right">
            <p className="text-[11px] lg:text-[13px] text-gray-800 font-bold">
              Tạm tính ( Đã bao gồm thuế )
            </p>
            <p className="w-full text-[15px] md:text-[19px] second-primary-text-color font-bold text-right">
              76.000 <span className="font-normal">VND</span>
            </p>
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default CartItem;
