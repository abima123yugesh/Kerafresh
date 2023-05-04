import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import adminService from "./adminService";

export const Admin = createAsyncThunk(
  "admin/login-admin",
  async (credentials, thunkAPI) => {
    try {
      return await adminService.loginAdmin(credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "admin/logout-admin",
  async (thunkAPI) => {
    try {
      return await adminService.logout();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  admin: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Admin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Admin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.admin = action.payload;
      })
      .addCase(Admin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default adminSlice.reducer;