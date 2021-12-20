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
  const isLoadingForPopular = useAppSelector((state) => state.products.isLoadingForPopular);
  const errorForPopular = useAppSelector((state) => state.products.errorForPopular);
  const isLoadingForDiminishing = useAppSelector((state) => state.products.isLoadingForPopular);
  const errorForDiminishing = useAppSelector((state) => state.products.errorForPopular);

  useEffect(() => {
    dispatch(getPopularProducts());
    dispatch(getDiminishingProducts());
    console.warn(errorForPopular)
    console.warn(errorForDiminishing)
  }, [dispatch, errorForPopular, errorForDiminishing]);

  if (isLoadingForPopular || isLoadingForDiminishing) {
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
