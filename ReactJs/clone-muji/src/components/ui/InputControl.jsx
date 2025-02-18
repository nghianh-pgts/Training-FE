import React, { useState } from "react";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

const InputControl = ({
  label,
  placeHolder,
  isRequired = true,
  type = "text",
  name, // tên field
  register, // hàm register từ React Hook Form
  error, // thông báo lỗi từ validation
}) => {
  const [showPasswords, setShowPasswords] = useState(false);

  const handleShowPassword = () => {
    setShowPasswords((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium flex gap-1">
        {label}
        <span className={isRequired ? "text-red-600" : "hidden"}>*</span>
      </p>

      {type === "select" ? (
        <select
          className="border rounded-md focus-visible:outline-none px-3 py-2"
          // Nếu register và name tồn tại thì áp dụng spread của register(name)
          {...(register && name ? register(name) : {})}
        >
          <option value="nam">nam</option>
          <option value="nữ">nữ</option>
          <option value="khác">khác</option>
        </select>
      ) : type === "password" ? (
        <div className="relative ">
          <input
            type={showPasswords ? "text" : type}
            className={`border rounded-md focus-visible:outline-none px-3 py-2 w-full`}
            placeholder={placeHolder}
            {...(register && name ? register(name) : {})}
          />
          <button
            type="button" //mặc định button type là submit nên chỉ định để khi ấn không submit form
            className={`absolute top-2 right-2 text-2xl`}
            onClick={handleShowPassword}
          >
            {showPasswords ? (
              <>
                <BiSolidShow className="hover-primary-text-color scale-110" />
              </>
            ) : (
              <>
                <BiSolidHide className=" scale-100" />
              </>
            )}
          </button>
        </div>
      ) : (
        <input
          type={type}
          className={`border rounded-md focus-visible:outline-none px-3 py-2 `}
          placeholder={placeHolder}
          {...(register && name ? register(name) : {})}
        />
      )}
      {/* Hiển thị thông báo lỗi nếu có */}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default InputControl;
