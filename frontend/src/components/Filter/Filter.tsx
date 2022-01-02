import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setFilteredProducts } from "../../store/filteredProducts/filteredProductsSlice";
import { IFormInput, Products, SortingEnum } from "../../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import "./filter.scss";
import { FilterSchema } from "../../validations";

interface IFilter {
  products: Array<Products>;
}

const Filter: React.FC<IFilter> = ({ products }) => {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(FilterSchema),
  });
  const [filteredItems, setFilteredItems] = useState<Array<Products> | null>(
    null
  );
  console.log(filteredItems);
  let arrayForSort: Array<Products> = filteredItems
    ? [...filteredItems]
    : [...products];

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);

    if (data.sorting !== SortingEnum.default) {
      if (data.sorting === SortingEnum.ascName) {
        arrayForSort.sort((a, b) => (a.name > b.name ? -1 : 1));
        setFilteredItems(arrayForSort);
      } else if (data.sorting === SortingEnum.descName) {
        arrayForSort.sort((a, b) => (b.name > a.name ? -1 : 1));
        setFilteredItems(arrayForSort);
      } else if (data.sorting === SortingEnum.ascPrice) {
        arrayForSort.sort((a, b) => (b.price > a.price ? -1 : 1));
        setFilteredItems(arrayForSort);
      } else if (data.sorting === SortingEnum.descPrice) {
        arrayForSort.sort((a, b) => (a.price > b.price ? -1 : 1));
        setFilteredItems(arrayForSort);
      }
    }

    if (data.lowestPrice && data.highestPrice) {
      const filteredItems = arrayForSort.filter(
        (item) =>
          item.price > Number(data.lowestPrice) &&
          item.price > Number(data.highestPrice)
      );
      setFilteredItems(filteredItems);
    } else if (data.lowestPrice) {
      const filteredItems = arrayForSort.filter(
        (item) => item.price > Number(data.lowestPrice)
      );
      setFilteredItems(filteredItems);
    } else if (data.highestPrice) {
      const filteredItems = arrayForSort.filter(
        (item) => item.price < Number(data.highestPrice)
      );
      setFilteredItems(filteredItems);
    }

    if (data.productName) {
      const filteredItems = arrayForSort.filter((item) =>
        item.name
          .toLowerCase()
          .includes(data.productName?.toLowerCase() as string)
      );
      setFilteredItems(filteredItems);
    }
  };
  const dispatch = useAppDispatch();

  const handleReset = () => {
    reset();
    setFilteredItems(null);
  };

  useEffect(() => {
    setFilteredItems(null);
  }, [location.pathname]);

  useEffect(() => {
    dispatch(setFilteredProducts(filteredItems ?? products));
  }, [dispatch, products, filteredItems]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="title">Ürünleri Filtrele</h3>
      <div className="sorting">
        <p className="sub-title">Sıralama Tipi</p>
        <select defaultValue={"default"} {...register("sorting")}>
          <option value="default" disabled selected>
            Sıralama tipi seçiniz
          </option>
          <option value="ascName">İsme göre artan</option>
          <option value="descName">İsme göre azalan</option>
          <option value="ascPrice">Fiyata göre artan</option>
          <option value="descPrice">Fiyata göre azalan</option>
        </select>
      </div>
      <div className="price-range">
        <p className="sub-title">Fiyat Aralığı</p>
        <input type="number" {...register("lowestPrice")} />
        -
        <input type="number" {...register("highestPrice")} />
        {errors.lowestPrice && <span className="error">{errors.lowestPrice.message}</span>}
        {errors.highestPrice && <span className="error">{errors.highestPrice.message}</span>}
      </div>
      <div className="search-name">
        <p className="sub-title">Ürün Adı</p>
        <input type="search" {...register("productName")} />
      </div>
      <button type="submit" className="submit-button">
        Arama Yap
      </button>
      <button
        type="button"
        onClick={() => handleReset()}
        className="reset-button"
      >
        Filtreleri Kaldır
      </button>
    </form>
  );
};

export default Filter;
