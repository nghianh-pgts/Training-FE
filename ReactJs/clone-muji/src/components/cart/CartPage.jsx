import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartInfor from "./CartInfor";
import CartItemList from "./CartItemList";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const CartPage = () => {
  const { user } = useAuth();
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleStickyInfor = () => {
      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleStickyInfor);

    return () => {
      window.removeEventListener("scroll", handleStickyInfor);
    };
  }, []);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    } else {
      const userId = user.userId;
      const fetchCartData = async () => {
        let response = await axios.get(
          `http://localhost:8080/api/cart/${userId}`
        );

        console.log("dữ liệu cart: ", response.data.cartItems);
        setCartItems(response.data.cartItems);
      };

      fetchCartData();
    }
  }, [user, navigate]);

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="flex flex-col gap-2 container mt-6">
      <h1 className="w-full text-[26px] font-bold text-left ">Giỏ hàng</h1>
      <div className="flex gap-4 bg-white">
        <CartItemList items={cartItems} />

        <CartInfor isSticky={isSticky} data={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
