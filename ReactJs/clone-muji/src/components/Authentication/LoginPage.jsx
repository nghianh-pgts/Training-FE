import React from "react";
import InputControl from "../ui/InputControl";
import PrimaryButton from "../ui/PrimaryButton";
import { Link } from "react-router-dom";
import AuthCard from "./AuthCard";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const loginSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu phải ít nhất 6 ký tự" }),
});

const LoginPage = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("login Form Data:", data);

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        data
      );
      toast.success("Đăng nhập thành công");

      login(response.data.token);
    } catch (error) {
      console.log("lỗi login", error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <AuthCard title="Thành viên đăng nhập">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <InputControl
          label={"Địa chỉ email"}
          placeHolder={"Nhập email"}
          type={"text"}
          name={"email"}
          register={register}
          error={errors.email?.message}
          className={"px-3 py-2"}
        />
        <InputControl
          label={"Mật khẩu"}
          placeHolder={"Nhập email"}
          type={"password"}
          name={"password"}
          error={errors.password?.message}
          register={register}
          className={"px-3 py-2"}
        />
        <PrimaryButton
          className="primary-bg-color hover-primary-bg-color mt-8"
          text={"Đăng nhập"}
          type="submit"
        />
        <p className="font-bold second-primary-text-color underline cursor-pointer text-center pb-10 border-b-2">
          <Link to={"/forgot-password"}>Quên mật khẩu?</Link>
        </p>

        <div className="flex flex-col w-full gap-3">
          <h2 className="font-bold">Thành viên mới tại MUJI</h2>
          <p className="text-[13px] font-normal text-gray-800">
            Hãy tham gia cùng chúng tôi để nhận được thông báo về ưu đãi mới và
            mã giảm giá hấp dẫn.
          </p>
          <Link className="w-full" to={"/register"}>
            <PrimaryButton
              className="hover-primary-bg-color primary-text-color transition-all duration-300 hover:text-white bg-white border border-[#80001c] w-full"
              text={"Đăng ký thành viên mới"}
            />
          </Link>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar
        transition={Zoom}
      />
    </AuthCard>
  );
};

export default LoginPage;
