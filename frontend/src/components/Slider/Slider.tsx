import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./slider.scss";
import FirstCarousel from "../../assets/images/carousel1.webp";
import SecondCarousel from "../../assets/images/carousel2.webp";
import ThirdCarousel from "../../assets/images/carousel3.webp";
import FourthCarousel from "../../assets/images/carousel4.webp";

const Slider: React.FC = () => {
  return (
    <div className="slider">
      <Carousel autoPlay infiniteLoop>
        <div>
          <img src={FirstCarousel} alt="Carousel 1" />
        </div>
        <div>
          <img src={SecondCarousel} alt="Carousel 2" />
        </div>
        <div>
          <img src={ThirdCarousel} alt="Carousel 3" />
        </div>
        <div>
          <img src={FourthCarousel} alt="Carousel 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
