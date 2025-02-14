import React, { useEffect, useState } from "react";
import TableData from "../UI/TableData";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "../UI/Modal";
import useCRUD from "../../../Hooks/useCRUD";
import { data } from "react-router-dom";
import ProductForm from "../UI/ProductForm";

const colTitles = [
  "mã sản phẩm",
  "tên sản phẩm",
  "hình ảnh",
  "giá",
  "số lượng",
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
    loading,
    error,
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
    setProductFormData({
      productName: "",
      productDescription: "",
      price: "",
      stock: "",
      discount: "",
      category: "",
      subcategory: "",
      imageUrls: "",
    });
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
    setIsModalOpen(true);
  };

  // Mở modal xác nhận xóa
  const handleOpenDeleteModal = (product) => {
    setModalType("delete");
    setProductFormData(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async () => {
    if (modalType === "add") {
      const dataToSubmit = {
        ...productFormData,
        price: parseFloat(productFormData.price),
        stock: parseInt(productFormData.stock, 10),
        discount: parseFloat(productFormData.discount),
        imageUrls: productFormData.imageUrls
          .split(",")
          .map((url) => url.trim())
          .filter((url) => url !== ""),
        // Xây dựng object subcategory theo id đã chọn
        subcategory: {
          subcategoryId: productFormData.subcategory,
        },
        // subcategory: productFormData.subcategory,
      };

      try {
        await createItem(dataToSubmit);
      } catch (error) {
        console.error("Lỗi thêm sản phẩm:", error);
      }
    } else if (modalType === "edit") {
      const dataToSubmit = {
        ...productFormData,
        price: parseFloat(productFormData.price),
        stock: parseInt(productFormData.stock, 10),
        discount: parseFloat(productFormData.discount),
        imageUrls: productFormData.imageUrls
          .split(",")
          .map((url) => url.trim())
          .filter((url) => url !== ""),
        subcategory: { subcategoryId: productFormData.subcategory },
      };

      try {
        await updateItem(dataToSubmit.productId, dataToSubmit);
        fetchData();
      } catch (error) {
        console.error("Lỗi sửa sản phẩm:", error);
      }
    } else if (modalType === "delete") {
      try {
        await deleteItem(productFormData.productId);
        await fetchData();
      } catch (error) {
        console.error("Lỗi xóa sản phẩm:", error);
      }
    }
    handleCloseModal();
  };

  // Nhận dữ liệu form thay đổi từ ProductForm
  const handleFormChange = (formData) => {
    setProductFormData(formData);
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
        <TableData
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
        onSubmit={handleSubmit}
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
                onClick={handleSubmit}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Xóa
              </button>
            </div>
          </div>
        ) : (
          <>
            <ProductForm
              isOpen={isModalOpen}
              initialData={productFormData}
              onChange={handleFormChange}
            />
          </>
        )}
      </Modal>
    </div>
  );
};

export default ProductManagement;
