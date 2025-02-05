import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Grid, Navigation, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const ProductList = ({ listTitle, products }) => {
  return (
    <div className="flex flex-col w-full container">
      <h2 className="font-bold capitalize text-[19px] leading-8 text-left">
        {listTitle}
      </h2>
      <div className="w-full mt-6 md:mt-8">
        <Swiper
          slidesPerView={6}
          grid={{
            rows: 1,
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductCard
              productImage={
                "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550583104351_org_1.jpg"
              }
              productName={"Găng Tay Mittens Từ Sợi Tái Chế - Trẻ Em MUJI"}
              productPrice={"99.000 vnđ"}
              isNew={true}
            />
          </SwiperSlide>
          {arr.map(() => (
            <SwiperSlide>
              <ProductCard
                productImage={
                  "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/8/9/8938504340020.jpg"
                }
                productName={"Hộp gừng nướng mật ong 80G"}
                productPrice={"97.000 vnđ"}
                isNew={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={6}
          grid={{
            rows: 1,
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductCard
              productImage={
                "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550583104351_org_1.jpg"
              }
              productName={"Găng Tay Mittens Từ Sợi Tái Chế - Trẻ Em MUJI"}
              productPrice={"99.000 vnđ"}
              isNew={true}
            />
          </SwiperSlide>
          {arr.map(() => (
            <SwiperSlide>
              <ProductCard
                productImage={
                  "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/8/9/8938504340020.jpg"
                }
                productName={"Hộp gừng nướng mật ong 80G"}
                productPrice={"97.000 vnđ"}
                isNew={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductList;
