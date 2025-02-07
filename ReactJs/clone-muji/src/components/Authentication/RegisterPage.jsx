import React from "react";
import PrimaryButton from "../ui/PrimaryButton";
import { Link } from "react-router-dom";
import InputControl from "../ui/InputControl";
import AuthCard from "./AuthCard";

const RegisterPage = () => {
  return (
    <AuthCard title="Đăng ký tài khoản">
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
      <InputControl
        label={"Số điện thoại"}
        placeHolder={"Nhập số điện thoại"}
        type={"text"}
      />
      <InputControl
        label={"Họ và tên"}
        placeHolder={"Nhập đầy đủ họ và tên"}
        type={"text"}
      />
      <InputControl
        label={"Ngày sinh"}
        placeHolder={"dd/mm/yyyy"}
        type={"date"}
      />

      <InputControl label={"Giới tính"} type={"select"} isRequired={false} />
      <PrimaryButton
        className="primary-bg-color hover-primary-bg-color mt-8 mb-6"
        text={"Tạo tài khoản mới"}
      />

      <div className="flex flex-col w-full gap-3 pt-6 border-t-2">
        <h2 className="font-bold">Đã có tài khoản</h2>

        <Link className="w-full" to={"/login"}>
          <PrimaryButton
            className="hover-primary-bg-color primary-text-color transition-all duration-300 hover:text-white bg-white border border-[#80001c] w-full"
            text={"Đăng nhập ngay"}
          />
        </Link>
      </div>
    </AuthCard>
  );
};

export default RegisterPage;
