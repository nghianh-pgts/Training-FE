import React from "react";

import { Link, useNavigate } from "react-router-dom";
import FavoriteButton from "../ui/FavoriteButton";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const ProductCard = ({
  productImage,
  productName,
  productPrice,
  isNew,
  isPurchasable,
  productId,
  userId,
}) => {
  const navigate = useNavigate();

  const handleAddToCartOutSide = async () => {
    if (userId == null) {
      navigate("/login");
    } else {
      try {
        let response = await axios.post(
          `localhost:8080/api/cart/add?userId=${userId}&productId=${productId}&quantity=1`
        );

        console.log("res add to cart", response.data);
      } catch (error) {
        console.log("Lỗi add to card từ bên ngoài", error);
      }
    }
  };

  return (
    <div className="flex flex-col w-full relative cursor-pointer">
      {/* <Link to={`/product/${productId}`}> */}
      {isNew && (
        <span className="absolute p-2 primary-bg-color top-0 left-0 text-white font-semibold text-xs uppercase">
          mới
        </span>
      )}
      <img src={productImage} alt="" className="object-cover h-[50%] w-full" />
      <div className="h-[50%] px-3 pt-3 pb-5">
        <p className="text-xs font-normal leading-5 text-gray-800 break-words hover:text-[#80001c] hover:cursor-pointer mb-4 md:mb-1 min-h-11 text-left truncate">
          {productName}
        </p>

        {isPurchasable && (
          <>
            <div className="flex justify-between mb-2 items-center">
              <span className="font-bold text-[15px] primary-text-color">
                {productPrice}
              </span>
              <FavoriteButton />
            </div>

            <button
              className="font-bold text-[13px] w-full py-1 border-gray-400 border hover:bg-[#80001c] bg-white hover:text-white"
              onClick={handleAddToCartOutSide}
            >
              mua hàng
            </button>
          </>
        )}
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ProductCard;
