import React, { useState } from "react";

const Modal = ({ title, isOpen, onClose, children, onSubmit, modalType }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-all duration-300 ${
        isOpen ? "opacity-100 visible " : "opacity-0 invisible "
      }`}
    >
      <div
        className={`bg-white p-6 rounded-lg w-[50vw] shadow-lg transition-all duration-500 ${
          isOpen
            ? "scale-100 opacity-100 -translate-y-10"
            : "scale-90 opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-xl font-bold">
            ✖
          </button>
        </div>

        <div className="py-4">{children}</div>

        {/* Nếu truyền onSubmit, hiển thị nút lưu (đối với add/edit) */}
        {onSubmit && (modalType === "add" || modalType === "edit") && (
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Hủy
            </button>
            <button
              onClick={onSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Lưu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
