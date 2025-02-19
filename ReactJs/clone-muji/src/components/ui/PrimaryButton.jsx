import React from "react";

const PrimaryButton = ({ className, text, onClick }) => {
  return (
    <button
      className={`${className} rounded-md px-5 py-4 font-bold `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
