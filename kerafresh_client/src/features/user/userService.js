import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const register = async (KeraFreshUser) => {
  const response = await axios.post(`${base_url}user/register`, KeraFreshUser);
  if (response.data) {
    localStorage.setItem("KeraFreshUser", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (KeraFreshUser) => {
  const response = await axios.post(`${base_url}user/login`, KeraFreshUser);
  if (response.data) {
    localStorage.setItem("KeraFreshUser", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  localStorage.removeItem("KeraFreshUser");
};

const addToWishlist = async (productId) => {
  try {
    const response = await axios.put(
      `${base_url}user/add-to-wishlist`,
      { productId },
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const getUserWishlist = async (id) => {
  try {
    const response = await axios.get(
      `${base_url}user/get-user-wishlist/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const userService = {
  register,
  login,
  logout,
  addToWishlist,
  getUserWishlist,
};

export default userService;
