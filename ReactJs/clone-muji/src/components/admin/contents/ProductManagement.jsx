import React, { useEffect, useState } from "react";

import { IoMdAddCircle } from "react-icons/io";
import Modal from "../UI/Modal";
import useCRUD from "../../../Hooks/useCRUD";
import ProductForm from "../UI/ProductForm";
import { Slide, toast, ToastContainer } from "react-toastify";
import ProductTableData from "../data/ProductTableData";

const colTitles = [
  "mã sản phẩm",
  "tên sản phẩm",
  "hình ảnh",
  "giá",
  "số lượng",
  "màu sắc",
  "Danh mục",
  "ngày tạo",
  "action",
];

const ProductManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add", "edit", "delete"
  // State chứa dữ liệu form (dùng cho add/edit và truyền vào xác nhận xóa nếu cần)
  const [productFormData, setProductFormData] = useState({});

  // Sử dụng custom hook cho resource "products"
  const {
    data: products,
    fetchData,
    createItem,
    updateItem,
    deleteItem,
  } = useCRUD("products");

  useEffect(() => {
    fetchData();
    console.log(products);
  }, []);

  // Mở modal thêm sản phẩm
  const handleOpenAddModal = () => {
    setModalType("add");

    setIsModalOpen(true);
  };

  // Mở modal chỉnh sửa sản phẩm
  const handleOpenEditModal = (product) => {
    setModalType("edit");
    setProductFormData({
      ...product,
      // Nếu có, bạn có thể lưu thêm thông tin Category (ví dụ product.subcategory.categoryId)
      category: product.subcategory?.categoryId || "",
      subcategory: product.subcategory?.subcategoryId || "",
      // Nếu imageUrls là mảng, chuyển thành chuỗi cách nhau bởi dấu phẩy
      imageUrls: product.imageUrls ? product.imageUrls.join(", ") : "",
    });
    console.log("data edit ban đầu: ", productFormData);
    setIsModalOpen(true);
  };

  // Mở modal xác nhận xóa
  const handleOpenDeleteModal = (product) => {
    setModalType("delete");
    setProductFormData(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleDelete = async () => {
    if (modalType === "delete") {
      try {
        await deleteItem(productFormData.productId);
        toast.success("Xóa sản phẩm thành công");
        await fetchData();
      } catch (error) {
        console.error("Lỗi xóa sản phẩm:", error);
        toast.error("lỗi xóa sản phẩm", error);
      }
    }
    handleCloseModal();
  };

  return (
    <div className="flex flex-col gap-3">
      <ToastContainer
        position="top-right"
        transition={Slide}
        autoClose={2000}
      />
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
        <ProductTableData
          colTitles={colTitles}
          data={products}
          handleOpenEditModal={handleOpenEditModal}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
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
        modalType={modalType}
      >
        {modalType === "delete" ? (
          <div>
            <p>
              Bạn có chắc chắn muốn xóa sản phẩm{" "}
              <strong>{productFormData?.productName}</strong> không?
            </p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Hủy
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Xóa
              </button>
            </div>
          </div>
        ) : modalType === "add" ? (
          <>
            <ProductForm isOpen={isModalOpen} initialData={{}} action={"add"} />
          </>
        ) : modalType === "edit" ? (
          <>
            <ProductForm
              isOpen={isModalOpen}
              initialData={productFormData}
              action={"edit"}
              setIsModalOpen={setIsModalOpen}
            />
          </>
        ) : (
          <></>
        )}
      </Modal>
    </div>
  );
};

export default ProductManagement;
