import React, { useEffect, useState } from "react";
import PaginationButton from "../category/PaginationButton";
import FilterBar from "../category/FilterBar";
import SortBar from "../category/SortBar";
import { Breadcrumbs } from "@mui/material";
import { Link, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useAuth } from "../context/AuthContext";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const searchKeywords = searchParams.get("keywords") || "";
  const [searchData, setSearchData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchSearchResult = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/products/search?keywords=${
          searchKeywords ? searchKeywords : ""
        }`
      );

      console.log("Kết quả tìm kiếm: ", res.data);
      setSearchData(res.data);
    };

    fetchSearchResult();
  }, [searchKeywords]);

  return (
    <div className="flex flex-col">
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

            <span className="primary-text-color font-bold cursor-text">{}</span>
          </Breadcrumbs>
        </div>

        <div className="container px-0 md:pt-3 md:pb-8 md:px-6">
          <div className="flex justify-between items-center mt-2 px-4 md:px-0 md:mb-8 ">
            <div className="flex items-end gap-2">
              <h1 className="lg:text-3xl font-bold">
                {searchKeywords ? searchKeywords : ""}
              </h1>
              <span>{searchData?.length} mặt hàng</span>
            </div>

            <SortBar />
          </div>

          <div className="flex gap-5">
            <FilterBar />
            <div className="w-[80%] grid lg:grid-cols-4 md:grid-cols-2 gap-3">
              {searchData &&
                searchData.map((item) => (
                  // <Link to={`/product/${item.productId}`}>
                  <div className="transition-all duration-300 hover:bg-gray-100 hover:shadow-lg rounded-lg">
                    <ProductCard
                      className="hover:shadow-lg"
                      productImage={item.imageUrls[0]}
                      productName={item.productName}
                      productPrice={`${item.price} vnđ`}
                      isNew={true}
                      isPurchasable={true}
                      productId={item.productId}
                      userId={user?.userId}
                    />
                  </div>
                  // </Link>
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

export default SearchResult;
