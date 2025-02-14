import { Breadcrumbs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GiBodyHeight } from "react-icons/gi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import ProductInfoTab from "./ProductInfoTab";
import ProductList from "./ProductList";
import FavoriteButton from "../ui/FavoriteButton";
import axios from "axios";

const productImagesByColor = {
  gray: [
    "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550583076672_org_2.jpg",
    "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550583076672_10_org_2.jpg",
    "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550583076672_03_org_2.jpg",
    "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550583076672_01_org_2.jpg",
  ],
  brown: [
    "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550583076559_org.jpg",
    "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550583076559_09_org.jpg",
    "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550583076559_04_org.jpg",
    "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550583076559_07_org.jpg",
  ],
};

const DetailProductPage = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { productId } = useParams();
  const [selectedColor, setSelectedColor] = useState("gray");
  const [selectedSize, setSelectedSize] = useState("S");
  const [productImage, setProductImage] = useState(
    productImagesByColor[selectedColor]
  );
  const [currentImage, setCurrentImage] = useState(productImage[0]);

  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fetchInforProduct = async () => {
      setLoading(true);
      let response;
      try {
        response = await axios.get(
          `http://localhost:8080/api/products/${productId}`
        );
      } catch (error) {
        setError(error);
      }

      setProductDetail(response.data);
      console.log("response", response);
      console.log("data product: ", productDetail);
      // console.log("data product: " + JSON.stringify(productDetail));
    };

    fetchInforProduct();
  }, [productId]);

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const handleChooseImage = (image) => {
    setCurrentImage(image);
    console.log(currentImage);
  };

  const handleSelectColor = (color) => {
    setSelectedColor(color);
    setProductImage(productImagesByColor[color]);
    setCurrentImage(productImage[0]);
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="container flex flex-col gap-3">
      {/**Breadcrumb */}
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
            Chi tiết sản phẩm
          </span>
        </Breadcrumbs>
      </div>
      {/**Breadcrumb */}

      {/**Main part */}
      <div className="flex gap-3">
        <div className="lg:w-[58%] flex flex-col lg:flex-row gap-3">
          <ul className="w-16 flex flex-row lg:flex-col gap-2 ">
            {productDetail.imageUrls &&
              productDetail.imageUrls.map((image) => (
                <li className="w-full h-16 cursor-pointer" key={image}>
                  <img
                    src={image}
                    alt="imagePlaceHolder"
                    className="object-cover"
                    onClick={() => handleChooseImage(image)}
                  />
                </li>
              ))}
          </ul>
          <div
            className="max-w-[632px] flex-1 relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <img src={currentImage} className="object-cover" alt="" />

            {showZoom && (
              <div
                className="absolute w-40 h-40 border-2 border-gray-300 rounded-lg overflow-hidden pointer-events-none cursor-pointer"
                style={{
                  top: `${zoomPosition.y}%`,
                  left: `${zoomPosition.x}%`,
                  transform: "translate(-50%, -50%)",
                  backgroundImage: `url(${currentImage})`,
                  backgroundSize: "600%",
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              />
            )}
          </div>
        </div>
        <div className="w-[42%] flex flex-col gap-4 px-3">
          <h1 className="capitalize font-semibold text-[16px] lg:text-2xl text-left">
            {productDetail.productName}
          </h1>
          <div className="flex gap-2 text-[17px] w-full">
            <span className="font-semibold">SKU: </span>
            <span>444444444</span>
            <span>(3 đã bán)</span>

            <span className="ml-auto">
              <FavoriteButton />
            </span>
          </div>

          <div className="flex gap-2 text-[17px] w-full">
            <span className="font-semibold">Màu sắc: </span>
            <span className="capitalize">
              {selectedColor === "gray" ? "Xanh" : "Xám khói"}
            </span>
          </div>
          <div className="flex justify-start gap-2">
            <button
              className={`w-10 h-10 rounded-full ${
                selectedColor === "gray" ? "border-3 border-black" : ""
              } `}
              onClick={() => handleSelectColor("gray")}
            >
              <img
                src="https://api.muji.com.vn/media/attribute/swatch/swatch_image/30x20/0/0/007_charcoal_grey.png"
                alt=""
                className="object-cover w-[95%] rounded-full"
              />
            </button>
            <button
              className={`w-10 h-10 rounded-full ${
                selectedColor === "brown" ? "border-3 border-black" : ""
              } `}
              onClick={() => handleSelectColor("brown")}
            >
              <img
                src="https://api.muji.com.vn/media/attribute/swatch/swatch_image/30x20/0/0/007_charcoal_grey.png"
                alt=""
                className="object-cover rounded-full w-[95%]"
              />
            </button>
          </div>

          <div className="flex gap-2 justify-between text-[17px] w-full">
            <span className="font-semibold">Kích cỡ: {selectedSize}</span>
            <span className="text-xs font-semibold flex items-center">
              <GiBodyHeight />
              Thông số kích thước
            </span>
          </div>
          <div className="flex gap-2">
            <button
              className={`uppercase py-2 px-6 border-2 rounded-md ${
                selectedSize === "S" ? "border-black" : ""
              }`}
              onClick={() => handleSelectSize("S")}
            >
              s
            </button>
            <button
              className={`uppercase py-2 px-6 border-2 rounded-md ${
                selectedSize === "M" ? "border-black" : ""
              }`}
              onClick={() => handleSelectSize("M")}
            >
              m
            </button>
            <button
              className={`uppercase py-2 px-6 border-2 rounded-md ${
                selectedSize === "L" ? "border-black" : ""
              }`}
              onClick={() => handleSelectSize("L")}
            >
              l
            </button>
          </div>
          <div className="w-full flex flex-col mt-5 gap-3 m-auto max-w-[392px]">
            <div className="flex gap-3 justify-center items-end">
              <span className="line-through text-gray-400 text-xs">
                1.299.000 VND
              </span>
              <span className="primary-text-color ">
                <span className="font-bold text-xl">{productDetail.price}</span>{" "}
                VND
              </span>
            </div>
            <div className="flex gap-3 justify-center">
              <QuantitySelector />
            </div>
            <div className="flex flex-col w-full gap-3 justify-center mt-5">
              <button className="w-full py-6 px-8 text-white hover-primary-bg-color border font-bold rounded-md bg-[#3c3c43]">
                Thêm vào giỏ hàng
              </button>
              <button className="w-full py-6 px-8 hover:bg-gray-100 border font-bold rounded-md text-[#3c3c43]">
                Mua nhanh
              </button>
            </div>
            <div className="flex justify-center gap-2 items-center">
              <span className="font-bold">Chia sẻ: </span>
              <span className="text-blue-500 text-xl">
                <FaFacebook />
              </span>
              <span className="text-blue-700 text-xl">
                <FaFacebookMessenger />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/**Main part */}

      {/**Specs tab */}
      <div>
        <ProductInfoTab />
      </div>
      {/**Specs tab */}

      <ProductList listTitle={"Đã xem"} />
    </div>
  );
};

export default DetailProductPage;
