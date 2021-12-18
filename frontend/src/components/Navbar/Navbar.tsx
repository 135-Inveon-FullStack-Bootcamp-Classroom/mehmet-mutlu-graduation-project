import React from "react";
import Logo from "../../assets/images/logo.png";
import "./navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-first-section">
        <div className="navbar-logo">
          <img src={Logo} alt="ECommerce Logo" />
          TrendTech
        </div>
        <div className="navbar-cart-container">
          <button>
            <i className="fas fa-shopping-bag"></i>
            <span>Sepetim</span>
          </button>
        </div>
      </div>
      <div className="navbar-second-section">
        <button>Telefon</button>
        <button>Televizyon</button>
        <button>Bilgisayar</button>
        <button>Tablet</button>
      </div>
    </div>
  );
};

export default Navbar;
