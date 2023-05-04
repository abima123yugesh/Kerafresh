import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService";

export const getEnquiries = createAsyncThunk(
    "enquiry/get-enquiries",
    async (thunkAPI) => {
        try {
            return await enquiryService.getEnquiries();
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const resetState = createAction("Reset_all");

const initialState = {
    enquiries: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const enquirySlice = createSlice({
    name: "enquiry",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getEnquiries.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getEnquiries.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.enquiries = action.payload;
          })
          .addCase(getEnquiries.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
          })
          .addCase(resetState, () => initialState);
    }
})

export default enquirySlice.reducer;