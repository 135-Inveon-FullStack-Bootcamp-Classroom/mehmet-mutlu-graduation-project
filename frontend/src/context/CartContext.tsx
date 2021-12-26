import React, { createContext } from "react";
import { OrderItem } from "../types/types";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContextState = {
  cartItems: [],
  addToCart: (item: OrderItem) => {},
  checkItem: (id: number) => !!{}
};

export const CartContext = createContext(CartContextState);

const CartContextProvider: React.FC = ({ children }) => {
  const localStorageItems = localStorage.getItem("cartItems")
  const cartItemList = localStorageItems ? JSON.parse(localStorageItems || "") : [];
  const [cartItems, setCartItems] = useLocalStorage("cartItems", cartItemList);

  const addToCart = (item: OrderItem) => {
    setCartItems([...cartItems, item]);
  };

  const checkItem = (id: number) => {
    return cartItems.find((item: OrderItem) => item.id === id) ? true : false;
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, checkItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
