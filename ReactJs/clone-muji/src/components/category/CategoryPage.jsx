import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";
import ProductCard from "../product/ProductCard";
import PaginationButton from "./PaginationButton";

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1];

const CategoryPage = ({ categoryName, categoryProducts, categoryImage }) => {
  return (
    <div className="flex flex-col">
      {categoryImage && (
        <>
          <img
            src={categoryImage}
            alt=""
            className="w-full h-[70vh] object-cover"
          />
        </>
      )}
      <div className="container">
        <div className="my-3 md:px-2 !text-11px px-4 py-2 lg:px-6">
          <Breadcrumbs
            aria-label="breadcrumb"
            separator="›"
            sx={{ fontSize: "11px" }}
          >
            <Link to="/" className="hover:text-black text-gray-400">
              Trang chủ
            </Link>

            <span className="primary-text-color font-bold cursor-text">
              {categoryName}
            </span>
          </Breadcrumbs>
        </div>

        <div className="container px-0 md:pt-3 md:pb-8 md:px-6">
          <div className="flex justify-between items-center mt-2 px-4 md:px-0 md:mb-8 ">
            <div className="flex items-end gap-2">
              <h1 className="lg:text-3xl font-bold">{categoryName}</h1>
              <span>167 mặt hàng</span>
            </div>

            <SortBar />
          </div>

          <div className="flex gap-5">
            <FilterBar />
            <div className="w-[80%] grid lg:grid-cols-4 md:grid-cols-2 gap-3">
              {arr.map(() => (
                <div className="transition-all duration-300 hover:bg-gray-100 hover:shadow-lg rounded-lg">
                  <ProductCard
                    className="hover:shadow-lg"
                    productImage={
                      "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/8/9/8938504340020.jpg"
                    }
                    productName={"Hộp gừng nướng mật ong 80G"}
                    productPrice={"97.000 vnđ"}
                    isNew={true}
                    isPurchasable={true}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="left-[20%] container flex justify-center mt-4">
            <PaginationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
