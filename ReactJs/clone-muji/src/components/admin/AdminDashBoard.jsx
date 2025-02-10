import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AdminNavBar from "./AdminNavBar";
import { Outlet } from "react-router-dom";

const AdminDashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Hàm chuyển đổi trạng thái của sidebar
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Phần nội dung chính */}
      <div className="flex-1 p-4 flex flex-col gap-2">
        <AdminNavBar />
        {/* Thêm các nội dung, bảng thống kê, biểu đồ, v.v... */}
        <div className="bg-white shadow-md rounded p-6 border">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
