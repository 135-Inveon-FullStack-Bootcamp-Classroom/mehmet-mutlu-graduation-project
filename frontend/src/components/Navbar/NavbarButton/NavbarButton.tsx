import React from "react";
import { NavLink } from "react-router-dom";
import "./navbarButton.scss";

interface INavbarButton {
  children: React.ReactChild;
  to: string;
}

const NavbarButton: React.FC<INavbarButton> = ({ children, to }) => {
  return (
    <NavLink
      exact
      to={to}
      activeStyle={{ color: "#337BB6" }}
      className="navbar-button"
    >
      {children}
    </NavLink>
  );
};

export default NavbarButton;
