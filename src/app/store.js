import { configureStore } from "@reduxjs/toolkit";
import productcategoryReducer from "../features/productCategory/productcategorySlice"
import orderReducer from "../features/orders/orderSlice"
import enquiryReducer from "../features/enquiry/enquirySlice";
import userReducer from "../features/user/userSlice";
import productReducer from '../features/products/productSlice';
import adminReducer from '../features/admin/adminSlice'

export const store = configureStore({
    reducer: {
        productcategory: productcategoryReducer,
        order: orderReducer,
        enquiry: enquiryReducer,
        user: userReducer,
        product: productReducer,
        admin: adminReducer,
    }
})