import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

export const getAllUsers = createAsyncThunk(
    "customer/get-customers",
    async (thunkAPI) => {
        try {
            return await userService.getAllUsers()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState = {
    customers: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.customers = action.payload;
        })
        .addCase(getAllUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
        })
    }
})

export default userSlice.reducer;