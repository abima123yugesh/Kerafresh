import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService";

export const enquiries = createAsyncThunk(
    "enquiry/create-enquiry",
    async (data, thunkAPI) => {
        try {
            return await enquiryService.enquiry(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const resetState = createAction("Reset_all");

const initialState = {
    enquiry: [],
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
        .addCase(enquiries.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(enquiries.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.createdEnquiry = action.payload;
        })
        .addCase(enquiries.rejected, (state, action) => {
            state.isLoading= false;
            state.isError = true;
            state.isSuccess = false;
            state.errorMessage = action.payload.message
        })
        .addCase(resetState, () => initialState);
    }
})

export default enquirySlice.reducer