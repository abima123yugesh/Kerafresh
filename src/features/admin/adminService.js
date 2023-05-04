import axios from "axios";
import { base_url } from "../../utils/base_url";

const loginAdmin = async (values) => {
  const response = await axios.post(`${base_url}user/login-admin`, values);
  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  try {
    localStorage.removeItem("admin");
  } catch (error) {
    throw new Error(error);
  }
};

const adminService = {
  loginAdmin,
  logout,
};

export default adminService;