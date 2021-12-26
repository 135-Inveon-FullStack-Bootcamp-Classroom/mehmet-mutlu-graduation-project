import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { CartContext } from "../../context/CartContext";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { productsForCategoryId } from "../../store/products/productsSlice";
import { getProductsByCategoryId } from "../../store/products/services";
import "./categpryProducts.scss";

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
    <div className="products">
      <div className="products-left"></div>
      <div className="products-right">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
