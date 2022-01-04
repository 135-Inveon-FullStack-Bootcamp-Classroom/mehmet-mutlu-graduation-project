import React, { createContext } from "react";
import { OrderItem } from "../types/types";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContextState = {
  cartItems: [],
  addToCart: (item: OrderItem) => {},
  deleteItemFromCart: (item: number) => {},
  increaseCountOfItem: (item: number) => {},
  descreaseCountOfItem: (item: number) => {},
  checkItem: (id: number) => !!{},
};

export const CartContext = createContext(CartContextState);

const CartContextProvider: React.FC = ({ children }) => {
  const localStorageItems = localStorage.getItem("cartItems");
  const cartItemList = localStorageItems
    ? JSON.parse(localStorageItems || "")
    : [];
  const [cartItems, setCartItems] = useLocalStorage("cartItems", cartItemList);

  const addToCart = (item: OrderItem) => {
    setCartItems([...cartItems, item]);
  };

  const checkItem = (id: number) => {
    return cartItems.find((item: OrderItem) => item.id === id) ? true : false;
  };

  const deleteItemFromCart = (id: number) => {
    const filteredItems = cartItems.filter((item: OrderItem) => item.id !== id);
    setCartItems(filteredItems);
  };

  const increaseOrDecrease = (count: number, operation: string) => {
    return operation === "increase" ? ++count : --count;
  };

  const increaseCountOfItem = (id: number) => {
    const increasedItemsArr = cartItems.map((item: OrderItem) => {
      if (item.id === id) {
        return {
          ...item,
          count: increaseOrDecrease(item.count, "increase"),
        };
      }
      return item;
    });
    setCartItems(increasedItemsArr);
  };

  const descreaseCountOfItem = (id: number) => {
    const increasedItemsArr = cartItems.map((item: OrderItem) => {
      if (item.id === id) {
        return {
          ...item,
          count: increaseOrDecrease(item.count, "decrease"),
        };
      }
      return item;
    });
    setCartItems(increasedItemsArr);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        checkItem,
        deleteItemFromCart,
        increaseCountOfItem,
        descreaseCountOfItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
