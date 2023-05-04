import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";
// import wishlistReducer from "../features/wishlist/wishlistSlice";
import enquiryReducer from "../features/enquiry/enquirySlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    enquiry: enquiryReducer,
    // wishlist: wishlistReducer,
  },
});
