import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { allCategories } from "../../store/categories/categoriesSlice";
import { getAllCategories } from "../../store/categories/services";
import Loader from "../Loader/Loader";
import Logo from "../Logo/Logo";
import Badge from "./Badge/Badge";
import "./navbar.scss";
import NavbarButton from "./NavbarButton/NavbarButton";

const Navbar: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(allCategories);
  const isLoadingForCategories = useAppSelector(
    (state) => state.categories.isLoadingForCategories
  );
  const errorForCategories = useAppSelector(
    (state) => state.categories.errorForCategories
  );

  useEffect(() => {
    dispatch(getAllCategories());
    console.warn(errorForCategories);
  }, [dispatch, errorForCategories]);

  if (isLoadingForCategories) {
    return <Loader />;
  }

  return (
    <div className="navbar">
      <div className="navbar-first-section">
        <Logo />
        <div className="navbar-cart-container">
          <button>
            <Badge>{cartItems.length}</Badge>
            <i className="fas fa-shopping-bag"></i>
            <span>Sepetim</span>
          </button>
        </div>
      </div>
      <div className="navbar-second-section">
        <NavbarButton to="/">Ana Sayfa</NavbarButton>
        {categories.map((category) => (
          <NavbarButton to={`/categories/${category.id}`} key={category.id}>
            {category.name}
          </NavbarButton>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
