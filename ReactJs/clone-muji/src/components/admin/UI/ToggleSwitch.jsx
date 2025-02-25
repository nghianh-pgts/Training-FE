import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ToggleSwitch = ({ isActiveInit, className, userId }) => {
  const [isActive, setIsActive] = useState(isActiveInit);
  const [loading, setLoading] = useState(false);
  console.log("giá trị của active ", isActive);

  const handleChangeStatus = async () => {
    if (loading) return;

    const newStatus = !isActive;

    try {
      await axios.put(`http://localhost:8080/api/users/${userId}/status`, {
        isActive: newStatus,
      });
      setIsActive((prev) => !prev);
      toast.success("update status thành công");
    } catch (error) {
      toast.error("update status thất bại");
      console.log("Lỗi khi cập nhật status user", error);
    }
  };

  return (
    <div
      className={`${className} w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isActive ? "bg-green-400" : "bg-gray-300"
      }`}
      onClick={handleChangeStatus}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isActive ? "translate-x-8" : "translate-x-0"
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;
