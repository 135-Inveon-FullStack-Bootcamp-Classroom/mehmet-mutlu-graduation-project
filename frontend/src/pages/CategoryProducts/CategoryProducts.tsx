import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import Loader from "../../components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { productsForCategoryId } from "../../store/products/productsSlice";
import { getProductsByCategoryId } from "../../store/products/services";
import "./categoryProducts.scss";

const CategoryProducts: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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
        <Filter />
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
