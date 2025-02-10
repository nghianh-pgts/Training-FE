import React, { useState } from "react";
import TableData from "../UI/TableData";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "../UI/Modal";

const colTitles = [
  "mã sản phẩm",
  "tên sản phẩm",
  "hình ảnh",
  "giá",
  "số lượng",
  "ngày tạo",
  "action",
];

const products = [
  {
    id: "SP001",
    name: "Giày thể thao nam",
    image: "https://via.placeholder.com/150",
    price: 1200000,
    quantity: 10,
    createdAt: "2024-02-10",
    action: "Edit | Delete",
  },
  {
    id: "SP002",
    name: "Giày sneaker nữ",
    image: "https://via.placeholder.com/150",
    price: 950000,
    quantity: 15,
    createdAt: "2024-02-08",
    action: "Edit | Delete",
  },
  {
    id: "SP003",
    name: "Giày lười nam",
    image: "https://via.placeholder.com/150",
    price: 850000,
    quantity: 20,
    createdAt: "2024-02-07",
    action: "Edit | Delete",
  },
  {
    id: "SP004",
    name: "Giày cao gót nữ",
    image: "https://via.placeholder.com/150",
    price: 1100000,
    quantity: 12,
    createdAt: "2024-02-06",
    action: "Edit | Delete",
  },
  {
    id: "SP005",
    name: "Giày chạy bộ",
    image: "https://via.placeholder.com/150",
    price: 1350000,
    quantity: 8,
    createdAt: "2024-02-05",
    action: "Edit | Delete",
  },
];

const ProductManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add", "edit", "delete"
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    image: "",
    price: "",
    quantity: "",
  });

  //   const handleOpenModal = () => setIsModalOpen(true);

  // Mở modal thêm sản phẩm
  const handleOpenAddModal = () => {
    setModalType("add");
    setSelectedProduct(null); // Xóa dữ liệu cũ
    setIsModalOpen(true);
  };

  // Mở modal chỉnh sửa sản phẩm
  const handleOpenEditModal = (product) => {
    setModalType("edit");
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Mở modal xác nhận xóa
  const handleOpenDeleteModal = (product) => {
    setModalType("delete");
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (modalType === "add") {
      console.log("Thêm sản phẩm:", selectedProduct);
    } else if (modalType === "edit") {
      console.log("Cập nhật sản phẩm:", selectedProduct);
    } else if (modalType === "delete") {
      console.log("Xóa sản phẩm:", selectedProduct.id);
    }
    handleCloseModal();
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full border-b-2 pb-4 flex justify-between">
        <h1 className="font-bold text-2xl">Quản lí sản phẩm</h1>
        <button
          className="rounded-md second-primary-bg-color px-4 py-2 text-xs font-semibold hover-primary-bg-color flex items-center gap-2"
          onClick={handleOpenAddModal}
        >
          <IoMdAddCircle />
          Thêm sản phẩm
        </button>
      </div>
      <div className="w-full py-3">
        <TableData colTitles={colTitles} data={products} />
      </div>

      {/* Gọi Modal Component */}
      <Modal
        title={
          modalType === "add"
            ? "thêm sản phẩm"
            : modalType === "edit"
            ? "sửa sản phẩm"
            : "xác nhận xóa"
        }
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        handleOpenEditModal={handleOpenEditModal}
        handleOpenDeleteModal={handleOpenDeleteModal}
      >
        {modalType === "delete" ? (
          <p>
            Bạn có chắc chắn muốn xóa sản phẩm{" "}
            <strong>{selectedProduct?.name}</strong> không?
          </p>
        ) : (
          <>
            <input
              type="text"
              name="id"
              placeholder="Mã sản phẩm"
              className="w-full p-2 border rounded mb-2"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Tên sản phẩm"
              className="w-full p-2 border rounded mb-2"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="image"
              placeholder="Link hình ảnh"
              className="w-full p-2 border rounded mb-2"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Giá sản phẩm"
              className="w-full p-2 border rounded mb-2"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="quantity"
              placeholder="Số lượng"
              className="w-full p-2 border rounded mb-2"
              onChange={handleInputChange}
            />
          </>
        )}
      </Modal>
    </div>
  );
};

export default ProductManagement;
