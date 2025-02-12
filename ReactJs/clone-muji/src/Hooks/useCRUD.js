import { useState } from "react";
import ApiService from "../Service/ApiService";

const useCRUD = (resource) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Lấy danh sách item
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await ApiService.get(`/${resource}`);
      setData(response.data);
    } catch (err) {
      setError(err);
      console.error("Lỗi fetchData:", err);
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (item) => {
    setLoading(true);

    try {
      const response = await ApiService.post(`/${resource}`, item);

      setData((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      setError(err);
      console.error("Lỗi createItem:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async (item) => {
    try {
      const response = await ApiService.put(`/${resource}/${item.id}`, item);
      setData((prev) =>
        prev.map((el) => (el.id === item.id ? response.data : el))
      );
      return response.data;
    } catch (err) {
      setError(err);
      console.error("Lỗi updateItem:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Xóa một item theo id
  const deleteItem = async (id) => {
    setLoading(true);
    try {
      await ApiService.delete(`/${resource}/${id}`);
      setData((prev) => prev.filter((el) => el.id !== id));
      return id;
    } catch (err) {
      setError(err);
      console.error("Lỗi deleteItem:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
    createItem,
    updateItem,
    deleteItem,
  };
};

export default useCRUD;
