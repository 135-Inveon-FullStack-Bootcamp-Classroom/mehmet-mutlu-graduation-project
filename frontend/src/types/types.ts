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

export type Categories = {
  id: number;
  name: string;
};

export type OrderItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  stockAmount: number;
  soldAmount: number;
  imageURLs: string;
  categoryId: number;
  category: null;
  count: number;
  totalPrice: number;
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

export type ProductsStateType = {
  products: {
    allProducts: Array<Products>;
    popularProducts: Array<Products>;
    diminishingProducts: Array<Products>;
    productDetails: Products;
    productsForCategoryId: Array<Products>;
  };
};

export type CategoriesStateType = {
  categories: {
    allCategories: Array<Categories>;
  };
};

export type FilteredProductsStateType = {
  filteredProducts: {
    products: Array<Products>;
  };
};

export interface IProductSlice {
  allProducts: Array<Products>;
  popularProducts: Array<Products>;
  diminishingProducts: Array<Products>;
  productDetails: Products;
  productsForCategoryId: Array<Products>;
  errorForPopular: string | null | undefined;
  isLoadingForPopular: boolean;
  errorForDiminishing: string | null | undefined;
  isLoadingForDiminishing: boolean;
  errorForProductDetails: string | null | undefined;
  isLoadingForProductDetails: boolean;
  errorProductsForCategoryId: string | null | undefined;
  isLoadingProductsForCategoryId: boolean;
}

export interface ICategorySlice {
  allCategories: Array<Categories>;
  errorForCategories: string | null | undefined;
  isLoadingForCategories: boolean;
}

export enum SortingEnum {
  ascName = "ascName",
  descName = "descName",
  ascPrice = "ascPrice",
  descPrice = "descPrice",
  default = "default"
}

export interface IFormInput {
  sorting?: SortingEnum;
  productName?: string;
  lowestPrice?: number;
  highestPrice?: number;
}