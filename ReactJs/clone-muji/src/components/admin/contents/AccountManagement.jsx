import React, { useEffect, useState } from "react";
import { FaSearch, FaUserSecret } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { Slide, toast, ToastContainer } from "react-toastify";
import AccountTableData from "../data/AccountTableData";
import useCRUD from "../../../Hooks/useCRUD";
import axios from "axios";

const colTitles = [
  "#",
  "fullName",
  "email",
  "password",
  "phone",
  "address",
  "dob",
  "created_at",
  "Active",
  "roles",
  "action",
];

const AccountManagement = () => {
  const { data: users, fetchData } = useCRUD("users");

  useEffect(() => {
    fetchData();
  }, []);

  const handleResetPasswords = async (userId) => {
    try {
      await axios.put(
        `http://localhost:8080/api/users/${userId}/reset-password`
      );
      toast.success(`Reset password thành công cho user id=${userId}`);
    } catch (error) {
      toast.error("reset password không thành công");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <ToastContainer
        position="bottom-right"
        transition={Slide}
        autoClose={2000}
      />
      <div className="w-full border-b-2 pb-4 flex justify-between">
        <h1 className="font-bold text-2xl flex gap-2 items-center">
          <FaUserSecret />
          Quản lí Users
        </h1>

        <div className="relative border rounded-md flex items-center">
          <input
            placeholder="tìm kiếm"
            className="focus-visible:outline-none py-1 pl-2"
          />
          <span className="absolute top-0 right-0 h-full flex items-center px-2 bg-blue-500 text-white">
            <FaSearch />
          </span>
        </div>
      </div>

      <div className="w-full py-3">
        <AccountTableData
          data={users}
          colTitles={colTitles}
          handleResetPassword={handleResetPasswords}
        />
      </div>
    </div>
  );
};

export default AccountManagement;
