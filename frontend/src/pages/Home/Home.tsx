import React, { useEffect } from 'react'
import HomePageProducts from '../../components/HomeProducts/HomePageProducts'
import Loader from '../../components/Loader/Loader';
import Slider from '../../components/Slider/Slider'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { diminishingProducts, popularProducts } from '../../store/products/productsSlice';
import { getDiminishingProducts, getPopularProducts } from '../../store/products/services';

const Home : React.FC = () => {
  const dispatch = useAppDispatch();
  const popularItems = useAppSelector(popularProducts);
  const diminishingItems = useAppSelector(diminishingProducts);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const error = useAppSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(getPopularProducts());
    dispatch(getDiminishingProducts());
    console.warn(error)
  }, [dispatch, error]);

  if (isLoading) {
    return <Loader />
  } 

  return (
    <div>
      <Slider />
      <HomePageProducts title="Popüler Ürünler" items={popularItems} />
      <HomePageProducts title="Tükenmek Üzere Olanlar" items={diminishingItems} />
    </div>
  )
}

export default Home
