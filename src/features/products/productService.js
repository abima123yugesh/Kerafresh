import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product`);
  return response.data;
};

const getaProduct = async (id) => {
  try {
    const response = await axios.post(`${base_url}product/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateProduct = async (val) => {
  try {
    const response = await axios.put(`${base_url}product/${val.id}`, {
      title: val.valData.title,
      price: val.valData.price,
      quantity: val.valData.quantity,
      description: val.valData.description,
      productCategory: val.valData.productCategory,
      images: val.valData.images,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${base_url}product/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const productService = {
  getProducts,
  getaProduct,
  updateProduct,
  deleteProduct,
};

export default productService;