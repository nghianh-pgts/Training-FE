import React from "react";
import { MdOutlineFavorite } from "react-icons/md";

const FavoriteButton = () => {
  return (
    <div className="bg-[#f4eede] p-1 border-[#e0ceaa] rounded-full text-xl shadow-sm border w-8 h-8 flex justify-center items-center">
      <MdOutlineFavorite className="text-[#e0ceaa] " />
    </div>
  );
};

export default FavoriteButton;
