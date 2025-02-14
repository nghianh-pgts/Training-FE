import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Grid, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const ProductList = ({
  listTitle,
  products,
  isPurchasable = true,
  isNew = true,
  rows = 1,
}) => {
  return (
    <div className="flex flex-col w-full container">
      <h2 className="font-bold capitalize text-[19px] leading-8 text-left md:text-[28px] md:leading-[45px]">
        <a href="#" className="hover-primary-text-color">
          {listTitle}
        </a>
      </h2>
      <div className="w-full mt-6 md:mt-8">
        <Swiper
          slidesPerView={6}
          grid={{
            rows: { rows },
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Navigation]}
          className="mySwiper"
        >
          {arr.map((productId) => (
            <SwiperSlide>
              <ProductCard
                productImage={
                  "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/8/9/8938504340020.jpg"
                }
                productName={"Hộp gừng nướng mật ong 80G"}
                productPrice={"97.000 vnđ"}
                isNew={isNew}
                isPurchasable={isPurchasable}
                productId={productId}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductList;
