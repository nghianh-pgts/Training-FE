import React from "react";

const PrimaryButton = ({ className, text }) => {
  return (
    <button className={`${className} rounded-md px-5 py-4 font-bold `}>
      {text}
    </button>
  );
};

export default PrimaryButton;
