import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = ({ items = [] }) => {
  return (
    <div className="dark:bg-gray-950 primary-bg-color primary-bg-color">
      <Link to={items.url}>
        <button className="w-full py-2">{items.title}</button>
      </Link>
    </div>
  );
};

export default SidebarMenu;
