import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

const UserInforCard = ({ userInfo, currentTab, setCurrentTab }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row gap-5 my-5">
        <div className="flex flex-col gap-5  w-full lg:w-1/2">
          <p className="w-full flex justify-start">
            <span className="user-info-title">Họ và tên</span>
            <span className="text-gray-400">{userInfo.fullName}</span>
          </p>
          <p className="w-full flex">
            <span className="user-info-title">Ngày sinh</span>
            <span className="text-gray-400">{userInfo.dob}</span>
          </p>
          <p className="w-full flex">
            <span className="user-info-title">Giới tính</span>
            <span className="text-gray-400">{userInfo.gender}</span>
          </p>
        </div>

        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <p className="w-full flex ">
            <span className="user-info-title">Email</span>
            <span className="text-gray-400">{userInfo.email}</span>
          </p>
          <p className="w-full flex">
            <span className="user-info-title">Số điện thoại</span>
            <span className="text-gray-400">{userInfo.phone}</span>
          </p>
        </div>
      </div>
      <PrimaryButton
        className={"w-full lg:w-1/2 py-2 px-5 primary-bg-color rounded md"}
        text={"Chỉnh sửa thông tin"}
        onClick={() => setCurrentTab("updateInfo")}
      />
    </div>
  );
};

export default UserInforCard;
