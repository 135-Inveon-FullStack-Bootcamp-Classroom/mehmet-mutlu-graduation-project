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
  errorForPopular: string | null | undefined;
  isLoadingForPopular: boolean;
  errorForDiminishing: string | null | undefined;
  isLoadingForDiminishing: boolean;
}
