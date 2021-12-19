import React from 'react'
import HomePageProducts from '../../components/HomeProducts/HomePageProducts'
import Slider from '../../components/Slider/Slider'

const Home : React.FC = () => {
  return (
    <div>
      <Slider />
      <HomePageProducts title="Popüler Ürünler" />
      <HomePageProducts title="Tükenmek Üzere Olanlar" />
    </div>
  )
}

export default Home
