import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputControl from "../ui/InputControl";
import PrimaryButton from "../ui/PrimaryButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUserInforForm = ({
  currentTab,
  setCurrentTab,
  userInfo,
  refreshInfo,
}) => {
  const [isChangePassword, setIsChangePassword] = useState(false);

  const baseSchema = z.object({
    phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
    fullName: z.string().nonempty({ message: "Họ và tên là bắt buộc" }),
    dob: z.string().nonempty({ message: "Ngày sinh là bắt buộc" }),
    address: z.string(),
    gender: z.enum(["nam", "nữ", "khác"], {
      errorMap: () => ({ message: "Vui lòng chọn giới tính" }),
    }),
  });

  const passwordSchema = z.object({
    oldPassword: z
      .string()
      .min(6, { message: "Mật khẩu phải ít nhất 6 ký tự" }),
    newPassword: z
      .string()
      .min(6, { message: "Mật khẩu mới phải ít nhất 6 ký tự" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Mật khẩu mới phải ít nhất 6 ký tự" }),
  });

  const updateInfoSchema = isChangePassword
    ? baseSchema
        .merge(passwordSchema)
        .refine((data) => data.newPassword === data.confirmPassword, {
          message: "Xác nhận mật khẩu không khớp",
          path: ["confirmPassword"],
        })
    : baseSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateInfoSchema),
    defaultValues: {
      ...userInfo,
    },
  });

  const navigate = useNavigate();

  const userId = userInfo.userId;
  const submitUpdateData = async (data) => {
    console.log("update request data: ", data);
    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/${userId}`,
        data
      );
      console.log("update res", response.data);
      refreshInfo(); // gọi callback refesh lại userInfo bên tab info
      setCurrentTab("info"); //Chuyển về tab info
      toast.success("Update thông tin thành công");
    } catch (error) {
      console.log("lỗi update: ", error);
    }
  };

  const handleCheckBox = () => {
    setIsChangePassword((prev) => !prev);
    console.log(isChangePassword);
  };

  return (
    <div className="w-full">
      <form action="" onSubmit={handleSubmit(submitUpdateData)}>
        <div className="flex gap-4">
          <div className="w-1/2 flex flex-col gap-4">
            <InputControl
              label={"Email"}
              disabled={true}
              className={"px-1 py-1"}
              name={"email"}
              register={register}
            />
            <InputControl
              label={"Họ và tên"}
              className={"px-1 py-1"}
              name={"fullName"}
              error={errors?.fullName?.message}
              register={register}
            />
            <InputControl
              label={"Ngày sinh"}
              className={"px-1 py-1"}
              type="date"
              name={"dob"}
              register={register}
              error={errors?.dob?.message}
            />
            <InputControl
              label={"Số điện thoại"}
              className={"px-1 py-1"}
              error={errors?.phone?.message}
              name={"phone"}
              register={register}
            />
            <InputControl
              label={"Giới tính"}
              name={"gender"}
              type="select"
              className={"px-1 py-1"}
              register={register}
              error={errors?.gender?.message}
            />

            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => handleCheckBox()}
            >
              <input type="checkbox" checked={isChangePassword} readOnly />
              <span>Đổi mật khẩu ?</span>
            </div>

            <PrimaryButton
              text={"Lưu"}
              className={"primary-bg-color hover:opacity-85"}
              type={"submit"}
            />
            <PrimaryButton
              text={"Hủy"}
              className={"bg-pink-50"}
              onClick={() => setCurrentTab("info")}
            />
          </div>
          {isChangePassword && (
            <div className="w-1/2 flex flex-col gap-4">
              <InputControl
                label={"Mật khẩu hiện tại"}
                className={"px-1 py-1"}
                type="password"
                name={"oldPassword"}
                register={register}
                error={errors?.oldPassword?.message}
              />
              <InputControl
                label={"Mật khẩu mới"}
                className={"px-1 py-1"}
                type="password"
                name={"newPassword"}
                register={register}
                error={errors?.newPassword?.message}
              />
              <InputControl
                label={"Xác nhận mật khẩu mới"}
                className={"px-1 py-1"}
                type="password"
                name={"confirmPassword"}
                register={register}
                error={errors?.confirmPassword?.message}
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default UpdateUserInforForm;
