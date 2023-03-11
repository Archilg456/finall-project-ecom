import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../applications";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/product", { product });
      return data;
    } catch (error) {
      return rejectWithValue("Whoops, looks like Someting Went Wrong");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(saveProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });

    builder.addCase(saveProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const productReducer = productSlice.reducers;
