import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories/",
  async () => {
    const response = await axios(
      "https://localhost:44325/api/Categories/get-all-categories"
    );
    return response.data;
  }
);