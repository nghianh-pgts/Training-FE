import React from "react";
import PrimaryButton from "../ui/PrimaryButton";
import { Link } from "react-router-dom";
import InputControl from "../ui/InputControl";
import AuthCard from "./AuthCard";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
  Bounce,
  Flip,
  Slide,
  toast,
  ToastContainer,
  Zoom,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu phải ít nhất 6 ký tự" }),
  phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
  fullName: z.string().nonempty({ message: "Họ và tên là bắt buộc" }),
  dob: z.string().nonempty({ message: "Ngày sinh là bắt buộc" }),
  address: z.string(),
  gender: z.enum(["nam", "nữ", "khác"], {
    errorMap: () => ({ message: "Vui lòng chọn giới tính" }),
  }),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/register",
        data
      );

      // Hiển thị toast thành công
      toast.success("Đăng ký tài khoản thành công");
      console.log("response trả về khi đăng ký thành công: ", response.data);
    } catch (error) {
      const ErrorMessage =
        error.response?.data?.message || "Có lỗi khi đăng ký";
      toast.error(ErrorMessage);
      console.log("lỗi xảy ra khi đăng ký: ", error);
    }
  };

  return (
    <AuthCard title="Đăng ký tài khoản">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <InputControl
          label="Địa chỉ email"
          placeHolder="Nhập email"
          type="text"
          name="email"
          register={register}
          error={errors.email?.message}
        />

        <InputControl
          label="Mật khẩu"
          placeHolder="Nhập mật khẩu"
          type="password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <InputControl
          label="Số điện thoại"
          placeHolder="Nhập số điện thoại"
          type="text"
          name="phone"
          register={register}
          error={errors.phone?.message}
        />

        <InputControl
          label="Họ và tên"
          placeHolder="Nhập đầy đủ họ và tên"
          type="text"
          name="fullName"
          register={register}
          error={errors.fullName?.message}
        />
        <InputControl
          label="Địa chỉ"
          placeHolder="nhập địa chỉ"
          type="text"
          name="address"
          register={register}
          error={errors.address?.message}
          isRequired={false}
        />

        <InputControl
          label="Ngày sinh"
          placeHolder="dd/mm/yyyy"
          type="date"
          name="dob"
          register={register}
          error={errors.dob?.message}
        />

        <InputControl
          label="Giới tính"
          type="select"
          isRequired={true}
          name="gender"
          register={register}
          error={errors.gender?.message}
        />

        <PrimaryButton
          className="primary-bg-color hover-primary-bg-color mt-8 mb-6"
          text="Tạo tài khoản mới"
          type="submit"
        />

        <div className="flex flex-col w-full gap-3 pt-6 border-t-2">
          <h2 className="font-bold">Đã có tài khoản</h2>
          <Link className="w-full" to="/login">
            <PrimaryButton
              className="hover-primary-bg-color primary-text-color transition-all duration-300 hover:text-white bg-white border border-[#80001c] w-full"
              text="Đăng nhập ngay"
            />
          </Link>
        </div>
      </form>
      {/* Thêm ToastContainer để hiển thị toast */}
      <ToastContainer
        hideProgressBar
        position="bottom-right"
        transition={Slide}
        autoClose={1000}
        theme="colored"
      />
    </AuthCard>
  );
};

export default RegisterPage;
