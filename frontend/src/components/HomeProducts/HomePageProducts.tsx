import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "@trendyol-js/react-carousel";
import "./homePageProducts.scss";
import Card from "../Card/Card";

interface IHomePageProducts {
  title: string
}

const HomePageProducts: React.FC<IHomePageProducts> = ({ title }) => {
  const [showAmount, setShowAmount] = useState<number>(4.5);
  const isMobile = useMediaQuery({ query: "(max-width: 415px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const amount = isMobile ? 2 : isTablet ? 2.5 : 4.5;
    setShowAmount(amount);
  }, [isTablet, isMobile])

  return (
    <div className="products">
      <div className="products-title">
        <h3>{title}</h3>
      </div>
      <Carousel
        show={showAmount}
        slide={isTablet ? 2 : 4}
        swiping={true}
        responsive={true}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </div>
  );
};

export default HomePageProducts;
