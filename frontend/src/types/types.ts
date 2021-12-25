export type Products = {
  id: number;
  name: string;
  price: number;
  description: string;
  stockAmount: number;
  soldAmount: number;
  imageURLs: string;
  categoryId: number;
  category: null;
};

export const DefaultProduct = {
  id: 0,
  name: "",
  price: 0,
  description: "",
  stockAmount: 0,
  soldAmount: 0,
  imageURLs: "",
  categoryId: 0,
  category: null,
};

export type StateType = {
  products: {
    allProducts: Array<Products>;
    popularProducts: Array<Products>;
    diminishingProducts: Array<Products>;
    productDetails: Products;
  };
};

export interface IProductSlice {
  allProducts: Array<Products>;
  popularProducts: Array<Products>;
  diminishingProducts: Array<Products>;
  productDetails: Products;
  errorForPopular: string | null | undefined;
  isLoadingForPopular: boolean;
  errorForDiminishing: string | null | undefined;
  isLoadingForDiminishing: boolean;
  errorForProductDetails: string | null | undefined;
  isLoadingForProductDetails: boolean;
}
