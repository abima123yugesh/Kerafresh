import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productcategoryService from "./productcategoryService";

export const getProductCategorys = createAsyncThunk(
    "productcategory/get-productcategory",
    async (thunkAPI) => {
        try {
            return await productcategoryService.getProductCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const updateACategory = createAsyncThunk(
  "Cat/update-Cat",
  async (Cat, thunkAPI) => {
    try {
      return await productcategoryService.updateCategory(Cat)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getaCategory = createAsyncThunk(
  "Cat/get-a-productcategory",
  async (id, thunkAPI) => {
    try {
      return await productcategoryService.getaCategory(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
    productcategory: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}

export const productcategorySlice = createSlice({
    name: "productcategory",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getProductCategorys.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCategorys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.productcategory = action.payload;
      })
      .addCase(getProductCategorys.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(updateACategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateACategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updatedcategory = action.payload;
      })
      .addCase(updateACategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getaCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getaCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.categoryName = action.payload.title;
        state.categoryImages = action.payload.images;
      })
      .addCase(getaCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
},
})

export default productcategorySlice.reducer;