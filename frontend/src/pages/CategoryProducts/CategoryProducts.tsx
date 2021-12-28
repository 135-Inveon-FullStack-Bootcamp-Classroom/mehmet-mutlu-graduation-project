import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { CartContext } from "../../context/CartContext";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { productsForCategoryId } from "../../store/products/productsSlice";
import { getProductsByCategoryId } from "../../store/products/services";
import "./categoryProducts.scss";

const CategoryProducts = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, checkItem } = useContext(CartContext);
  const dispatch = useAppDispatch();
  const items = useAppSelector(productsForCategoryId);
  const isLoadingProductsForCategoryId = useAppSelector(
    (state) => state.products.isLoadingForProductDetails
  );
  const errorProductsForCategoryId = useAppSelector(
    (state) => state.products.errorForProductDetails
  );

  useEffect(() => {
    dispatch(getProductsByCategoryId(id));
    console.warn(errorProductsForCategoryId);
  }, [dispatch, errorProductsForCategoryId, id]);

  if (isLoadingProductsForCategoryId) {
    return <Loader />;
  }

  return (
    <div className="category-products">
      <div className="category-products-left">
        <form action="">
          <h3 className="title">Ürünleri Filtrele</h3>
          <div className="sorting">
            <p className="sub-title">Sıralama Tipi</p>
            <select name="" id="">
              <option disabled selected>
                Sıralama tipi seçiniz
              </option>
              <option value="1">İsme göre artan</option>
              <option value="2">İsme göre azalan</option>
              <option value="3">Fiyata göre artan</option>
              <option value="4">Fiyata göre azalan</option>
            </select>
          </div>
          <div className="price-range">
            <p className="sub-title">Fiyat Aralığı</p>
            <input type="number" />
            -
            <input type="number" />
          </div>
          <div className="search-name">
            <p className="sub-title">Ürün Adı</p>
            <input type="search" />
          </div>
          <button type="submit" className="submit-button">Arama Yap</button>
        </form>
      </div>
      <div className="category-products-right">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
