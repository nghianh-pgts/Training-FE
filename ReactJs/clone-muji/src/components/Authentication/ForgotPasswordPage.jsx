import React from "react";
import AuthCard from "./AuthCard";
import InputControl from "../ui/InputControl";
import PrimaryButton from "../ui/PrimaryButton";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <AuthCard title="Quên mật khẩu">
      <p className="text-[13px] font-normal text-gray-800">
        Vui lòng nhập địa chỉ email đã đăng ký và thông tin xác nhận. Chúng tôi
        sẽ gửi cho bạn một liên kết qua email để đặt lại mật khẩu của bạn.
      </p>
      <InputControl
        label={"Địa chỉ email"}
        placeHolder={"Nhập email"}
        type={"text"}
      />

      <PrimaryButton
        className="primary-bg-color hover-primary-bg-color mt-8"
        text={"Đặt lại mật khẩu"}
      />
    </AuthCard>
  );
};

export default ForgotPasswordPage;
