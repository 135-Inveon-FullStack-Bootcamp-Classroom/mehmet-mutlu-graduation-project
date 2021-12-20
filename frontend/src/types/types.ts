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

export type StateType = {
  products: {
    allProducts: Array<Products>;
    popularProducts: Array<Products>;
    diminishingProducts: Array<Products>;
  };
};

export interface IProductSlice {
  allProducts: Array<Products>;
  popularProducts: Array<Products>;
  diminishingProducts: Array<Products>;
  error: string | null | undefined;
  isLoading: boolean;
}
