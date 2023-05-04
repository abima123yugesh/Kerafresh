import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import orderService from "./orderService";

export const placeOrder = createAsyncThunk(
  "order/place-order",
  async (orderData, thunkAPI) => {
    try {
      return await orderService.placeOrder(orderData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userOrder = createAsyncThunk(
  "order/user-order",
  async (thunkAPI) => {
      try {
          return await orderService.userOrder()
      } catch (error) {
          throw new Error(error)
      }
  }
)

export const resetState = createAction("Reset_all");

const initialState = {
  order: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.createdOrder = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.order = null;
      })
      .addCase(userOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.placedOrders = action.payload;
      })
      .addCase(userOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default orderSlice.reducer;
