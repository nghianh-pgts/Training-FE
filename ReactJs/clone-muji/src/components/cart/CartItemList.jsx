import React from "react";
import CartItem from "./CartItem";

const CartItemList = ({ items }) => {
  return (
    <div className="w-[100%] md:w-[70%] ">
      <div className="flex justify-between font-bold capitalize pb-6 border-b-2">
        <span>mặt hàng ({items.length})</span>
        <span>Tạm tính</span>
      </div>
      <div className="py-3 flex flex-col gap-6">
        {items.length > 0 ? (
          items.map((item) => (
            <CartItem
              productName={item?.product?.productName}
              productPrice={item?.product?.price}
              productImage={item?.product?.imageUrls[0]}
              productQuantity={item?.quantity}
            />
          ))
        ) : (
          <>Không có sản phẩm nào trong giỏ hàng</>
        )}
      </div>
    </div>
  );
};

export default CartItemList;
