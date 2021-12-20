import React from "react";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "@trendyol-js/react-carousel";
import "./homePageProducts.scss";
import Card from "../Card/Card";
import { Products } from "../../types/types";

interface IHomePageProducts {
  title: string;
  items: Array<Products>;
}

const HomePageProducts: React.FC<IHomePageProducts> = ({ title, items }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="products">
      <div className="products-title">
        <h3>{title}</h3>
      </div>
      <Carousel
        dynamic
        show={isTablet ? 2 : 4.5}
        slide={isTablet ? 2 : 4}
        swiping
        swipeOn={0.1}
      >
        {items.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default HomePageProducts;
