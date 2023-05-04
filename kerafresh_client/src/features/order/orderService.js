import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const placeOrder = async (orderData) => {
  const response = await axios.post(
    `${base_url}order/place-order`,
    orderData,
    config
  );
  return response;
};

const userOrder = async () => {
  const response = await axios.get(`${base_url}order/user-order`, config );
  return response.data;
}

const orderService = {
  placeOrder,
  userOrder
};

export default orderService;
