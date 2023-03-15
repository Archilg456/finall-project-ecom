import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../applications";

export const fetchHomePageProducts = createAsyncThunk(
  "product/fetchHomePageProducts",
  async (_, rejectWithValue) => {
    try {
      const { data } = await axiosInstance.get("/products");
      return data;
    } catch (error) {
      return rejectWithValue("Whoops, looks like Someting Went Wrong");
    }
  }
);

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/products", { product });
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
    homePageProducts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomePageProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageProducts = action.payload.product;
      state.error = false;
    });
    builder.addCase(fetchHomePageProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

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
