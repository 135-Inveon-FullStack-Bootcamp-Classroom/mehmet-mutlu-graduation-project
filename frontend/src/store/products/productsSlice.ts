import { createSlice } from "@reduxjs/toolkit";
import { IProductSlice, StateType } from "../../types/types";
import { getDiminishingProducts, getPopularProducts } from "./services";

const initialState = {
  allProducts: [],
  popularProducts: [],
  diminishingProducts: [],
  errorForPopular: null,
  isLoadingForPopular: false,
  errorForDiminishing: null,
  isLoadingForDiminishing: false,
} as IProductSlice;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularProducts.pending, (state) => {
      state.isLoadingForPopular = true;
    });
    builder.addCase(getPopularProducts.fulfilled, (state, action) => {
      state.isLoadingForPopular = false;
      state.popularProducts = action.payload;
    });
    builder.addCase(getPopularProducts.rejected, (state, action) => {
      state.isLoadingForPopular = false;
      state.errorForPopular = action.error.message;
    });
    builder.addCase(getDiminishingProducts.pending, (state) => {
      state.isLoadingForDiminishing = true;
    });
    builder.addCase(getDiminishingProducts.fulfilled, (state, action) => {
      state.isLoadingForDiminishing = false;
      state.diminishingProducts = action.payload;
    });
    builder.addCase(getDiminishingProducts.rejected, (state, action) => {
      state.isLoadingForDiminishing = false;
      state.errorForDiminishing = action.error.message;
    });
  },
});

export const popularProducts = (state: StateType) => state.products.popularProducts;
export const diminishingProducts = (state: StateType) => state.products.diminishingProducts;
export default productsSlice.reducer;
