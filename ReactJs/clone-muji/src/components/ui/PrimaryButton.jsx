import React from "react";

const PrimaryButton = ({ className, text, onClick, type }) => {
  return (
    <button
      className={`${className} rounded-md px-5 py-4 font-bold `}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
