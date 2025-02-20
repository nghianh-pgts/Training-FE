import React, { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";
import ProductCard from "../product/ProductCard";
import PaginationButton from "./PaginationButton";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const CategoryPage = ({ categoryName, categoryImage }) => {
  const { categoryId, subcategoryId } = useParams();
  const [categoryInfo, setCategoryInfo] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let productsResponse;
        let categoryResponse;
        if (subcategoryId && categoryId) {
          // Gọi API lấy sản phẩm theo subcategory
          productsResponse = await axios.get(
            `http://localhost:8080/api/products/subcategory/${subcategoryId}`
          );
          categoryResponse = await axios.get(
            `http://localhost:8080/api/subcategories/${subcategoryId}`
          );
        } else if (categoryId) {
          // Gọi API lấy sản phẩm theo category (bao gồm các subcategory)
          productsResponse = await axios.get(
            `http://localhost:8080/api/products/category/${categoryId}`
          );
          categoryResponse = await axios.get(
            `http://localhost:8080/api/categories/${categoryId}`
          );
        }
        // Giả sử dữ liệu trả về nằm trong productsResponse.data
        setProducts(productsResponse.data);
        setCategoryInfo(categoryResponse.data);
        console.log(categoryResponse.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, subcategoryId]);

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
              <h1 className="lg:text-3xl font-bold">
                {categoryInfo.categoryName
                  ? categoryInfo.categoryName
                  : categoryInfo.subCategoryName}
              </h1>
              <span>{products.length} mặt hàng</span>
            </div>

            <SortBar />
          </div>

          <div className="flex gap-5">
            <FilterBar />
            <div className="w-[80%] grid lg:grid-cols-4 md:grid-cols-2 gap-3">
              {products.map((item) => (
                <Link to={`/product/${item.productId}`}>
                  <div className="transition-all duration-300 hover:bg-gray-100 hover:shadow-lg rounded-lg">
                    <ProductCard
                      className="hover:shadow-lg"
                      productImage={item.imageUrls[0]}
                      productName={item.productName}
                      productPrice={`${item.price} vnđ`}
                      isNew={true}
                      isPurchasable={true}
                      productId={item.productId}
                      userId={user.userId}
                    />
                  </div>
                </Link>
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
