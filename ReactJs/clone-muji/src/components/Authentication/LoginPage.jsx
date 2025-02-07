import React from "react";
import InputControl from "../ui/InputControl";
import PrimaryButton from "../ui/PrimaryButton";
import { Link } from "react-router-dom";
import AuthCard from "./AuthCard";

const LoginPage = () => {
  return (
    <AuthCard title="Thành viên đăng nhập">
      <InputControl
        label={"Địa chỉ email"}
        placeHolder={"Nhập email"}
        type={"text"}
      />
      <InputControl
        label={"Mật khẩu"}
        placeHolder={"Nhập email"}
        type={"text"}
      />
      <PrimaryButton
        className="primary-bg-color hover-primary-bg-color mt-8"
        text={"Đăng nhập"}
      />
      <p className="font-bold second-primary-text-color underline cursor-pointer text-center pb-10 border-b-2">
        <Link to={"/forgot-password"}>Quên mật khẩu?</Link>
      </p>

      <div className="flex flex-col w-full gap-3">
        <h2 className="font-bold">Thành viên mới tại MUJI</h2>
        <p className="text-[13px] font-normal text-gray-800">
          Hãy tham gia cùng chúng tôi để nhận được thông báo về ưu đãi mới và mã
          giảm giá hấp dẫn.
        </p>
        <Link className="w-full" to={"/register"}>
          <PrimaryButton
            className="hover-primary-bg-color primary-text-color transition-all duration-300 hover:text-white bg-white border border-[#80001c] w-full"
            text={"Đăng ký thành viên mới"}
          />
        </Link>
      </div>
    </AuthCard>
  );
};

export default LoginPage;
