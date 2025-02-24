import React, { useCallback, useEffect, useState } from "react";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import DropDownMenu from "./DropDownMenu";
import { Link, useNavigate } from "react-router-dom";
import MiniCart from "../cart/MiniCart";

const MenuHeader = ({ isSticky, MenuCate }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isShowMiniCart, setIsShowMiniCart] = useState(false);

  const [inputSearch, setInputSearch] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputSearch.trim()) {
      navigate(`/search?keywords=${inputSearch}`);
    }
  };

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const debouncedHandleInputSearchChange = useCallback(
    debounce((value) => {
      setInputSearch(value);
    }, 500), // Delay 500ms
    []
  );

  const handleInputSearchChange = (e) => {
    // setInputSearch((prev) => e.target.value);
    debouncedHandleInputSearchChange(e.target.value);
  };

  useEffect(() => {
    console.log(inputSearch);
  }, [inputSearch]);

  const handleShowMiniCart = () => {
    setIsShowMiniCart((prev) => !prev);
  };

  return (
    <div
      className={`primary-bg-color transition-all  duration-500 z-10 ${
        isSticky ? "fixed top-0 left-0 w-full" : ""
      }`}
    >
      <div className="container">
        <div className="flex lg:py-5 text-white py-2">
          <div className="flex items-center gap-2 ">
            <span className="text-2xl cursor-pointer hidden">
              <IoMdMenu />
            </span>
            <Link to="/">
              <img
                className="mr-5 max-h-10 lg:max-h-[52px]"
                src="https://api.muji.com.vn/media/logo/stores/1/MUJI_Box-header.png"
                alt="ảnh"
              />
            </Link>
          </div>

          <ul className="lg:flex items-center hidden">
            {MenuCate.map((item, index) => (
              <div
                className="relative"
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <li className="menu-item-style">
                  <Link to={`/category/${item.cateId}`}>
                    {item.categoryName}
                  </Link>
                </li>
                {item.subcategories.length > 0 && (
                  <DropDownMenu items={item} isOpen={hoverIndex === index} />
                )}
              </div>
            ))}
          </ul>

          <div className="flex items-center flex-1 gap-2">
            <div className="flex-1 bg-white flex justify-between items-center px-2 py-1 rounded-md">
              <div onClick={handleSearch}>
                <CiSearch className="text-black text-xl" />
              </div>
              <input
                type="text"
                className="w-full rounded-md text-gray-800 focus:outline-none"
                placeholder="Bạn đang muốn tìm kiếm gì?"
                name="search"
                onChange={handleInputSearchChange}
              />
              <div>
                <IoMdClose className="text-black  text-xl" />
              </div>
            </div>

            <div className="relative">
              <button
                className="text-2xl cursor-pointer"
                onClick={handleShowMiniCart}
              >
                <LiaCartPlusSolid />
              </button>
              <MiniCart
                isShowMiniCart={isShowMiniCart}
                handleShowMiniCart={handleShowMiniCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
