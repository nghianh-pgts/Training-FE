import React from "react";

const InputControl = ({
  label,
  placeHolder,
  isRequired = true,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium flex gap-1">
        {label}
        <span className={isRequired ? "text-red-600" : "hidden"}>*</span>
      </p>

      {type === "select" ? (
        <select className="border rounded-md focus-visible:outline-none px-3 py-2">
          <option value={"nam"}>nam</option>
          <option value={"nữ"}>Nữ</option>
          <option value={"khác"}>khác</option>
        </select>
      ) : (
        <input
          type={type}
          className="border rounded-md focus-visible:outline-none px-3 py-2"
          placeholder={placeHolder}
        />
      )}
    </div>
  );
};

export default InputControl;
