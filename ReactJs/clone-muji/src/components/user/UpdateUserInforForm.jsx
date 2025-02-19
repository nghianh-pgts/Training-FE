import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputControl from "../ui/InputControl";
import PrimaryButton from "../ui/PrimaryButton";

const updateInfoSchema = z.object({
  password: z.string().min(6, { message: "Mật khẩu phải ít nhất 6 ký tự" }),
  phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
  fullName: z.string().nonempty({ message: "Họ và tên là bắt buộc" }),
  dob: z.string().nonempty({ message: "Ngày sinh là bắt buộc" }),
  address: z.string(),
  gender: z.enum(["nam", "nữ", "khác"], {
    errorMap: () => ({ message: "Vui lòng chọn giới tính" }),
  }),
});

const UpdateUserInforForm = ({ currentTab, setCurrentTab }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateInfoSchema),
  });

  const submitUpdateData = (data) => {
    console.log(data);
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
            />
            <InputControl
              label={"Giới tính"}
              name={"gender"}
              type="select"
              className={"px-1 py-1"}
              register={register}
              error={errors?.gender?.message}
            />

            <PrimaryButton
              text={"Lưu"}
              className={"primary-bg-color hover:opacity-85"}
            />
            <PrimaryButton
              text={"Hủy"}
              className={"bg-pink-50"}
              onClick={() => setCurrentTab("info")}
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <InputControl
              label={"Mật khẩu hiện tại"}
              className={"px-1 py-1"}
              type="password"
              name={"password"}
              register={register}
            />
            <InputControl
              label={"Mật khẩu mới"}
              className={"px-1 py-1"}
              type="password"
              name={"newPassword"}
              register={register}
            />
            <InputControl
              label={"Xác nhận mật khẩu mới"}
              className={"px-1 py-1"}
              type="password"
              name={"confirmPassword"}
              register={register}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserInforForm;
