import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { useSelector } from "react-redux";
import { productReducer } from "./slices/ProductSlice";
import { cartReducer } from "./slices/cartSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// user Slice
export { authenticateUser, logout } from "./slices/userSlice";

// product Slice

export {
  saveProduct,
  fetchHomePageProducts,
  setSelectedProduct,
  fetchProductsByCategory,
} from "./slices/ProductSlice";

// cart Slice

export {
  addToCart,
  removeFromCart,
  clearCart,
  saveCart,
  fetchCart,
} from "./slices/cartSlice";
// hooks

export const useUserInfo = () => useSelector((state) => state.user.userDate);

export const useHomePageProducts = () =>
  useSelector((state) => state.product.homePageProducts);

export const useSelectedProduct = () =>
  useSelector((state) => state.product.selectedProduct);

export const useSideBarItems = () =>
  useSelector((state) => state.product.sideBarItems);

export const useCategoryProducts = () =>
  useSelector((state) => state.product.categoryProducts);

//  Cart Hook

export const useCartItems = () => useSelector((state) => state.cart.cartItems);
