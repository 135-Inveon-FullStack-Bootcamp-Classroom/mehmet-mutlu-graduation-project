import React from "react";
import Logo from "../Logo/Logo";
import "./navbar.scss";
import NavbarButton from "./NavbarButton/NavbarButton";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-first-section">
        <Logo />
        <div className="navbar-cart-container">
          <button>
            <i className="fas fa-shopping-bag"></i>
            <span>Sepetim</span>
          </button>
        </div>
      </div>
      <div className="navbar-second-section">
        <NavbarButton>Telefon</NavbarButton>
        <NavbarButton>Televizyon</NavbarButton>
        <NavbarButton>Bilgisayar</NavbarButton>
        <NavbarButton>Tablet</NavbarButton>
      </div>
    </div>
  );
};

export default Navbar;
