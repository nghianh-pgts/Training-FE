import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import MiniCartItem from "./MiniCartItem";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const MiniCart = ({ isShowMiniCart, handleShowMiniCart, items }) => {
  const [miniCartItems, setMiniCartItems] = useState([]);
  const { user } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = miniCartItems.reduce(
      (total, item) => total + item?.product?.price * item?.quantity,
      0
    );

    setTotalPrice(totalPrice);
  }, [miniCartItems]);

  useEffect(() => {
    if (user) {
      const userId = user?.userId;
      console.log("Giá trị uId trong minicart: ", userId);
      const fetchMiniCartData = async () => {
        let response = await axios.get(
          `http://localhost:8080/api/cart/${userId}`
        );

        console.log("dữ liệu mini cart: ", response.data.cartItems);
        setMiniCartItems(response.data.cartItems);
      };
      fetchMiniCartData();
    }
    console.log("user chưa đăng nhập");
  }, [user]);

  return (
    <div
      className={`${
        isShowMiniCart ? "absolute  w-20 md:top-[61px]" : "hidden"
      } bg-white  right-0 text-gray-800 shadow-lg md:w-[368px] p-6 z-10`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          Giỏ hàng ({miniCartItems.length})
        </h1>
        <span className="text-2xl cursor-pointer" onClick={handleShowMiniCart}>
          <IoMdClose />
        </span>
      </div>
      {miniCartItems.length > 0 ? (
        <>
          <div className="flex-grow overflow-y-auto max-h-[400px] w-full flex flex-col my-3 py-2 border-y border-r-2 scrollbar-hide">
            {miniCartItems.map((item) => (
              <MiniCartItem
                key={item.id}
                productName={item?.product?.productName}
                productImage={item?.product?.imageUrls[0]}
                productQuantity={item?.quantity}
                productPrice={item?.product?.price}
              />
            ))}
          </div>
          <div className="flex justify-between w-full py-[15px] text-[15px] border-b-2">
            <span className="text-gray-400">
              Tạm tính ({miniCartItems.length} mặt hàng)
            </span>
            <span className="font-bold">{totalPrice} VND</span>
          </div>
        </>
      ) : (
        <>
          <p className="w-full py-4 text-left">
            Bạn cần đăng nhập để sử dụng chức năng giỏ hàng
          </p>
        </>
      )}

      <div className="flex flex-col gap-2 w-full mt-3">
        <button className="w-full rounded-md py-3 border font-bold second-primary-bg-color text-white hover-primary-bg-color">
          Thanh toán
        </button>
        <button
          className="w-full rounded-md py-3 border font-bold"
          onClick={handleShowMiniCart}
        >
          <Link to={"/cart"}>Xem giỏ hàng</Link>
        </button>
      </div>
    </div>
  );
};

export default MiniCart;
