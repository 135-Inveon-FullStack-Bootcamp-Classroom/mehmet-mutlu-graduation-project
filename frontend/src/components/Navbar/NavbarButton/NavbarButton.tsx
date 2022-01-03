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
      activeStyle={{ color: "#013077", borderBottom: "2px solid #013077" }}
      className="navbar-button"
    >
      {children}
    </NavLink>
  );
};

export default NavbarButton;
