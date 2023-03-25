import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../applications";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/users/${userId}/cart`);
      return data;
    } catch (error) {
      return rejectWithValue("Whoops, looks like Someting Went Wrong");
    }
  }
);

export const saveCart = createAsyncThunk(
  "cart/saveCart",
  async ({ userId, cartItems }, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.put(`/users/${userId}/cart`, { products: cartItems });
      dispatch(fetchCart(userId));
    } catch (error) {
      return rejectWithValue("Whoops, looks like Someting Went Wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    cartItems: [],
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const productId = product._id;
      const cartItem = state.cartItems?.find(
        (item) => item.product._id === productId
      );
      if (cartItem) {
        const updateCart = state.cartItems.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        state.cartItems = updateCart;
      } else {
        state.cartItems.push({ product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.product._id === productId
      );
      let newCart = [];
      if (cartItem.quantity === 1) {
        newCart = state.cartItems.filter(
          (item) => item.product._id !== productId
        );
      } else {
        newCart = state.cartItems.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      state.cartItems = newCart;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveCart.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(saveCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload.cart;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
