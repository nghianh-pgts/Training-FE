import React, { useEffect, useState } from "react";
import useCRUD from "../../../Hooks/useCRUD";

const ProductForm = ({ initialData = {}, onChange }) => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    price: "",
    stock: "",
    discount: "",
    category: "",
    subcategory: "",
    imageUrls: "",
    ...initialData,
  });

  const { data: categories, fetchData } = useCRUD("categories");

  // Cập nhật formData khi initialData thay đổi
  useEffect(() => {
    setFormData({
      productName: "",
      productDescription: "",
      price: "",
      stock: "",
      discount: "",
      category: "",
      subcategory: "",
      imageUrls: "",
      ...initialData,
    });
  }, [initialData]);

  // State chứa danh sách subcategory tương ứng với category được chọn
  const [availableSubcategories, setAvailableSubcategories] = useState([]);

  // Cập nhật danh sách subcategory khi category thay đổi
  useEffect(() => {
    if (formData.category) {
      const selectedCategory = categories.find(
        (cat) => cat.cateId === formData.category
      );
      setAvailableSubcategories(
        selectedCategory ? selectedCategory.subcategories : []
      );
      // Nếu subcategory hiện tại không thuộc danh sách mới, reset lại
      if (
        !selectedCategory?.subcategories.find(
          (sub) => sub.subcategoryId === formData.subcategory
        )
      ) {
        setFormData((prev) => ({ ...prev, subcategory: "" }));
      }
    } else {
      setAvailableSubcategories([]);
      setFormData((prev) => ({ ...prev, subcategory: "" }));
    }
  }, [formData.category, categories, formData.subcategory]);

  // Mỗi khi formData thay đổi, gọi callback onChange (nếu có)
  //   useEffect(() => {
  //     if (onChange) onChange(formData);
  //   }, [formData, onChange]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {" "}
      <form className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block text-sm font-medium">
            Product Description
          </label>
          <textarea
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          ></textarea>
        </div>

        {/* Price & Stock */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>

        {/* Discount & Created At */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium">Discount</label>
            <input
              type="number"
              step="0.01"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        {/* Update At & Category */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.cateId} value={cat.cateId}>
                  {cat.categoryName}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory */}
          <div>
            <label className="block text-sm font-medium">Subcategory</label>
            <select
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
              disabled={!availableSubcategories.length}
            >
              <option value="">Select Subcategory</option>
              {availableSubcategories.map((sub) => (
                <option key={sub.subcategoryId} value={sub.subcategoryId}>
                  {sub.subCategoryName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Image URLs */}
        <div>
          <label className="block text-sm font-medium">
            Image URLs (comma separated)
          </label>
          <input
            type="text"
            name="imageUrls"
            value={formData.imageUrls}
            onChange={handleChange}
            placeholder="http://example.com/image1.jpg, http://example.com/image2.jpg"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </form>
    </>
  );
};

export default ProductForm;
