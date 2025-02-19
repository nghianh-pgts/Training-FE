import { Icon } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaOpencart, FaRegHeart, FaRegStar } from "react-icons/fa";
import { PiAddressBookTabsFill } from "react-icons/pi";
import PrimaryButton from "../ui/PrimaryButton";
import UserInfoMenu from "./UserInfoMenu";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import UserInforCard from "./UserInforCard";
import UpdateUserInforForm from "./UpdateUserInforForm";

const UserInformation = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: null,
    dob: null,
    gender: null,
    email: null,
    phone: null,
  });

  const [currentTab, setCurrentTab] = useState("info");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        const currentTime = Math.floor(Date.now() / 1000);
        const decodedData = jwtDecode(storedToken);

        if (decodedData.exp > currentTime) {
          const userId = decodedData.userId;

          try {
            const response = await axios.get(
              `http://localhost:8080/api/users/${userId}`,
              {
                headers: {
                  Authorization: `Bearer ${storedToken}`,
                },
              }
            );
            console.log("user info", response.data);

            setUserInfo(response.data);
          } catch (error) {
            console.log("Lỗi lấy thông tin user", error);
          }
        }
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className="flex gap-4 max-w-screen-xl py-10 m-auto container">
      <UserInfoMenu />
      <div className="flex flex-col gap-3 flex-1 px-10">
        <h1 className="text-left font-bold text-3xl pb-4 border-b-2">
          Thông tin tài khoản
        </h1>

        {currentTab === "info" && (
          <>
            <UserInforCard
              userInfo={userInfo}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          </>
        )}

        {currentTab === "updateInfo" && (
          <>
            <UpdateUserInforForm
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default UserInformation;
