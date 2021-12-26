import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Logo from "../Logo/Logo";
import Badge from "./Badge/Badge";
import "./navbar.scss";
import NavbarButton from "./NavbarButton/NavbarButton";

const Navbar: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="navbar">
      <div className="navbar-first-section">
        <Logo />
        <div className="navbar-cart-container">
          <button>
            <Badge>
              {cartItems.length}
            </Badge>
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
