import { createSlice } from "@reduxjs/toolkit";
import { FilteredProductsStateType } from "../../types/types";

const initialState = {
  products: []
};

export const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState,
  reducers: {
    setFilteredProducts: (state, action) => {
      state.products = action.payload;
    }
  }
});

export const { setFilteredProducts } = filteredProductsSlice.actions;
export const filteredProducts = (state: FilteredProductsStateType) => state.filteredProducts.products;
export default filteredProductsSlice.reducer;