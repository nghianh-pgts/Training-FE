import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const footerLinks = [
  {
    title: "Về MUJI",
    links: [
      "MUJI là gì?",
      "Thông báo",
      "Cơ hội nghề nghiệp",
      "Câu hỏi thường gặp",
      "MUJI Catalog gia dụng",
    ],
  },
  {
    title: "Cửa hàng bán lẻ",
    links: ["Chính sách đổi, trả, hoàn tiền", "Danh sách cửa hàng"],
  },
  {
    title: "Cửa hàng trực tuyến",
    links: [
      "Chính sách bán hàng",
      "Chính sách Giao hàng",
      "Chính sách trả hàng, hoàn tiền",
      "Chính sách Đổi hàng",
      "Chính sách Bảo hành",
      "Chính sách Bảo mật",
    ],
  },
];

const Footer = () => {
  return (
    <div className="container flex flex-col md:grid md:grid-cols-5 gap-5 pt-10">
      <div className="flex flex-col gap-10">
        <p className="w-full">
          <img
            src="https://api.muji.com.vn/media/.renditions/wysiwyg/home_block/MUJI-logo-black-105x68.png"
            className="md:max-w-[80px]"
            alt=""
          />
        </p>
        <p className="w-full">
          <img
            src="https://api.muji.com.vn/media/wysiwyg/home_block/logoSaleNoti.png"
            alt=""
            className="max-w-[100%]"
            width={"195px"}
            height={"74px"}
          />
        </p>
      </div>
      {footerLinks.map((item) => (
        <div className="flex md:flex-col gap-4 md:gap-2 text-left text-nowrap flex-wrap md:text-wrap text-xs">
          <p className="font-bold">{item.title}</p>
          <div className="flex flex-row md:flex-col gap-2 ">
            {item.links.map((item) => (
              <p className="md:leading-5 text-gray-600 hover:underline">
                <a href="#" alt>
                  {item}
                </a>
              </p>
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-4 justify-start w-full text-left text-xs">
        <div className="flex flex-col">
          <p className="font-bold">Nhập địa chỉ email</p>
          <div className="w-full flex mt-2 pb-5 ">
            <input
              type="text"
              placeholder="Mã giảm giá"
              className="w-[70%] py-2 px-3 border text-[13px] focus-visible:outline-none"
            />
            <button className="w-[30%] primary-bg-color hover:opacity-90 font-semibold text-[13px] ">
              Đăng ký
            </button>
          </div>
        </div>
        <ul className="flex gap-2 text-3xl">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <AiFillTikTok />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
