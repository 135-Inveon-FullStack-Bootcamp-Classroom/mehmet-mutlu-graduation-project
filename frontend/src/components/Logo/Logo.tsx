import React from "react";
import CompanyLogo from "../../assets/images/logo.png";
import "./logo.scss"

const Logo = () => {
  return (
    <div className="logo">
      <img src={CompanyLogo} alt="ECommerce Logo" />
      TrendTech
    </div>
  );
};

export default Logo;
