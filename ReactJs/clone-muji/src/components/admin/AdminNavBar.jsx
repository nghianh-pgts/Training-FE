import {
  Avatar,
  Badge,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";

const AdminNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-4 py-2 flex justify-between items-center">
      {/* 🔍 Search Bar */}
      <div className="relative">
        <MdOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <InputBase
          placeholder="Tìm kiếm..."
          className="pl-10 pr-4 py-1 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        {/* 🌗 Dark/Light Mode Toggle */}
        <ThemeToggle />

        {/* 🔔 Notification Icon */}
        <IconButton className="text-gray-600 dark:text-gray-300">
          <Badge badgeContent={3} color="error">
            <RiNotificationSnoozeFill />
          </Badge>
        </IconButton>

        {/* 🧑 Avatar & Dropdown */}
        <div>
          <IconButton onClick={handleMenuOpen}>
            <Avatar src="https://i.pravatar.cc/300" />
          </IconButton>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Hồ sơ</MenuItem>
            <MenuItem onClick={handleMenuClose}>Cài đặt</MenuItem>
            <MenuItem onClick={handleMenuClose}>Đăng xuất</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
