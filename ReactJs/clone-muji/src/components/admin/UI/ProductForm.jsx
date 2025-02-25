import React, { useEffect, useState } from "react";
import useCRUD from "../../../Hooks/useCRUD";
import { z } from "zod";
import { useForm } from "react-hook-form";
import InputControl from "../../ui/InputControl";
import { zodResolver } from "@hookform/resolvers/zod";
import ApiService from "../../../Service/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const productFormSchema = z.object({
  productName: z.string().min(6, { message: "Tên sản phẩm tối thiểu 6 kí tự" }),
  productDescription: z
    .string()
    .min(1, { message: "mô tả không được để trống" }),
  price: z.preprocess(
    (value) => Number(value),
    z
      .number({ message: "giá phải là chữ số" })
      .min(0, { message: "Giá trị của giá không được âm" })
  ),
  stock: z.preprocess(
    (value) => (typeof value === "string" ? Number(value) : Number(value)),
    z
      .number({ message: "số lượng hàng phải là số" })
      .min(0, { message: "Giá trị của số lượng không được âm" })
  ),
  discount: z.preprocess(
    (val) => (val === "" ? "" : Number(val)),
    z
      .number({ message: "discount phải là số" })
      .max(60, { message: "chỉ được giảm giá tối đa 60%" })
      .optional()
  ),
  color: z
    .string({ message: "màu sắc phải là chuỗi" })
    .nonempty({ message: "màu sắc không được để trống" }),
  category: z.string().nonempty({ message: "category là bắt buộc" }),
  subcategory: z.string().nonempty({ message: "subcategory là bắt buộc" }),
  imageUrls: z.preprocess(
    (item) =>
      typeof item == "string" ? item.split(",").map((item) => item.trim()) : [],
    z.array(z.string()).optional()
  ),
});

const ProductForm = ({ initialData = {}, action, isOpen, setIsModalOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      productName: "",
      productDescription: "",
      color: "",
      price: "",
      stock: "",
      discount: "",
      category: initialData?.category || "",
      subcategory: initialData?.subcategory || "",
      imageUrls: "",
      ...initialData,
    },
  });

  const { data: categories, fetchData } = useCRUD("categories");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      reset({
        productName: "",
        productDescription: "",
        color: "",
        price: "",
        stock: "",
        discount: "",
        category: "",
        subcategory: "",
        imageUrls: "",
        ...initialData,
      });
    }
  }, [initialData, reset]);

  useEffect(() => {
    if (
      initialData &&
      categories.length > 0 &&
      initialData.category === "" &&
      initialData.subcategory
    ) {
      const foundCategory = categories.find((category) =>
        category.subcategories.some(
          (sub) => (sub.subcategoryId = initialData.subcategory)
        )
      );

      if (foundCategory) {
        setValue("category", foundCategory.cateId);
        console.log("Giá trị ban đầu của categoryId", foundCategory.cateId);
      }
    }
  }, [categories, initialData, setValue]);

  const navigate = useNavigate();

  const onSubmitForm = async (data) => {
    console.log("data form product", data);

    let response;
    if (action && action === "add") {
      try {
        const dataToAdd = {
          ...data,
          subcategory: { subcategoryId: data.subcategory },
        };
        response = await ApiService.post(
          `http://localhost:8080/api/products`,
          dataToAdd
        );

        console.log(response.data);
        toast.success("thêm sản phẩm thành công");
      } catch (error) {
        toast.error(response?.error?.message);
        console.log("Lỗi thêm sản phẩm ", error);
      }
    } else if (action && action === "edit") {
      try {
        response = await ApiService.put(
          `http://localhost:8080/api/products/${initialData?.productId}`,
          data
        );
        console.log("Data gửi đi: ", data);
        toast.success("sửa sản phẩm sản phẩm thành công");

        console.log("sửa sản phẩm thành công: ", response.data);
      } catch (error) {
        toast.error(response?.error?.message);
        console.log("Lỗi update sản phẩm: ", error);
      }
    }

    reset();
  };

  //chọn subcategory theo category
  const [subCategories, setSubcategories] = useState([]);
  const selectedCategoryId = watch("category"); //dùng watch của React-hook-form để theo dõi category

  useEffect(() => {
    let selectedCategory = categories.find(
      (item) => item.cateId === selectedCategoryId
    );
    const subcategoriesByCateId = selectedCategory?.subcategories || [];

    setSubcategories(subcategoriesByCateId);
  }, [selectedCategoryId]);

  return (
    <>
      <form
        className="space-y-4 flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <InputControl
          label={"Tên sản phẩm"}
          register={register}
          name={"productName"}
          className={"py-1 px-1"}
          error={errors?.productName?.message}
        />
        <div className="flex w-full gap-4">
          <div className="w-1/2">
            <InputControl
              label={"giá sản phẩm"}
              register={register}
              name={"price"}
              className={"py-1 px-1"}
              error={errors?.price?.message}
            />
          </div>
          <div className="w-1/2">
            <InputControl
              label={"stock"}
              register={register}
              name={"stock"}
              className={"py-1 px-1"}
              error={errors?.stock?.message}
            />
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="w-1/2">
            <InputControl
              label={"màu sắc"}
              register={register}
              name={"color"}
              className={"py-1 px-1"}
              error={errors?.color?.message}
            />
          </div>
          <div className="w-1/2">
            <InputControl
              label={"giảm giá"}
              register={register}
              name={"discount"}
              className={"py-1 px-1"}
              error={errors?.discount?.message}
            />
          </div>
        </div>
        <InputControl
          label={"Mô tả"}
          type="textfield"
          register={register}
          name={"productDescription"}
          className={"py-2 px-2 h-15"}
          error={errors?.productDescription?.message}
        />
        <div className="flex w-full gap-4">
          <div className="w-1/2 flex flex-col gap-2">
            <p className="text-sm font-medium flex gap-1">
              Danh mục
              <span className={"text-red-600"}>*</span>
            </p>
            <select
              defaultValue={initialData.category || ""}
              className={`border rounded-md focus-visible:outline-none flex-1 py-1 px-1`}
              // Nếu register và name tồn tại thì áp dụng spread của register(name)
              {...register("category")}
              error={errors?.category?.message}
            >
              <option value={""}>----Chọn danh mục----</option>
              {categories.map((item) => (
                <option
                  key={item.cateId}
                  value={item.cateId}
                  selected={initialData?.category === item.cateId}
                >
                  {item.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <p className="text-sm font-medium flex gap-1">
              Danh mục con
              <span className={"text-red-600"}>*</span>
            </p>
            <select
              defaultValue={initialData.subcategory || ""}
              className={`border rounded-md focus-visible:outline-none flex-1 py-1 px-1`}
              // Nếu register và name tồn tại thì áp dụng spread của register(name)
              {...register("subcategory")}
              error={errors?.subcategory?.message}
            >
              <option value={""}>----Chọn danh mục con----</option>
              {subCategories.length > 0 &&
                subCategories.map((item) => (
                  <option
                    key={item.subcategoryId}
                    value={item.subcategoryId}
                    selected={initialData?.subcategory === item.subcategoryId}
                  >
                    {item.subCategoryName}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <InputControl
          label={"Hình ảnh (cách nhau bởi dấu phẩy)"}
          type="text"
          register={register}
          name={"imageUrls"}
          className={"py-2 px-2 h-15"}
          error={errors?.imageUrls?.message}
        />
        <div className="flex gap-2">
          {" "}
          <button
            onClick={() => setIsModalOpen(false)}
            className="primary-bg-color py-2 rounded-md w-1/2"
          >
            Lưu
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="second-primary-bg-color py-2 rounded-md w-1/2"
            type="button"
          >
            Hủy
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
