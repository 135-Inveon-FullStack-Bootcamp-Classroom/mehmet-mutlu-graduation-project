import { createSlice } from "@reduxjs/toolkit";
import { CategoriesStateType, ICategorySlice } from "../../types/types";
import { getAllCategories } from "./services";

const initialState = {
  allCategories: [],
  errorForCategories: null,
  isLoadingForCategories: false,
} as ICategorySlice;

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state) => {
      state.isLoadingForCategories = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.isLoadingForCategories = false;
      state.allCategories = action.payload;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.isLoadingForCategories = false;
      state.errorForCategories = action.error.message;
    });
    },
});

export const allCategories = (state: CategoriesStateType) => state.categories.allCategories;
export default categoriesSlice.reducer;
