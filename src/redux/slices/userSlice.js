import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../applications";

export const authenticateUser = createAsyncThunk(
  "user/authenticateUser",
  async (values, { rejectWithValue }) => {
    try {
      const route = `/user/${values.isLogin ? "login" : "register"}`;
      const { data } = await axiosInstance.post(route, values.formValue);
      localStorage.setItem("token", data.token);
      localStorage.setItem("refresh_tokne", data.refreshToken);
      return data;
    } catch {}
    {
      return rejectWithValue("Someting Went Wrong");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDate: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticateUser.fulfilled, (state, Action) => {
      state.loading = false;
      state.userDate = Action.payload.user;
      state.error = null;
    });
    builder.addCase(authenticateUser.rejected, (state, Action) => {
      state.loading = false;
      state.error = Action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
