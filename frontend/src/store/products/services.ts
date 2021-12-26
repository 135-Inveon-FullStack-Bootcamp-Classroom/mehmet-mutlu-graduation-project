import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopularProducts = createAsyncThunk(
  "products/getPopularProducts/",
  async () => {
    const response = await axios(
      "https://localhost:44325/api/Products/get-popular-products"
    );
    return response.data;
  }
);

export const getDiminishingProducts = createAsyncThunk(
  "products/getDiminishingProducts/",
  async () => {
    const response = await axios(
      "https://localhost:44325/api/Products/get-diminshing-products"
    );
    return response.data;
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById/",
  async (id: string) => {
    const response = await axios(
      `https://localhost:44325/api/Products/get-product-by-id/${id}`
    );
    return response.data;
  }
);

export const getProductsByCategoryId = createAsyncThunk(
  "products/getProductsByCategoryId/",
  async (id: string) => {
    const response = await axios(
      `https://localhost:44325/api/Products/get-product-by-category-id/${id}`
    );
    return response.data;
  }
);
