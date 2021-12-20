import { createSlice } from "@reduxjs/toolkit";
import { IProductSlice, StateType } from "../../types/types";
import { getDiminishingProducts, getPopularProducts } from "./services";

const initialState = {
  allProducts: [],
  popularProducts: [],
  diminishingProducts: [],
  error: null,
  isLoading: false,
} as IProductSlice;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPopularProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.popularProducts = action.payload;
    });
    builder.addCase(getPopularProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getDiminishingProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDiminishingProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.diminishingProducts = action.payload;
    });
    builder.addCase(getDiminishingProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const popularProducts = (state: StateType) => state.products.popularProducts;
export const diminishingProducts = (state: StateType) => state.products.diminishingProducts;
export default productsSlice.reducer;
