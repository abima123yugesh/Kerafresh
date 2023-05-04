import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProducts = async () => {
  try {
    const response = await axios.get(`${base_url}product`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Products");
  }
};

const productService = {
  getProducts,
};

export default productService;
