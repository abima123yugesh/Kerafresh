import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

//Add to cart
const addToCart = async (product, quantity) => {
  const response = await axios.post(
    `${base_url}cart`,
    {
      cart: [
        {
          _id: product._id,
          count: quantity,
        },
      ],
    },
    config
  );
  return response.data;
};

//Get user cart
const getUserCart = async () => {
  try {
    const response = await axios.get(`${base_url}cart`, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

//delete item from cart
const removeProductFromCart = async (id) => {
  const response = await axios.delete(`${base_url}cart/${id}`, config);
  return response.data;
};

const cartService = {
  addToCart,
  getUserCart,
  removeProductFromCart,
};

export default cartService;
