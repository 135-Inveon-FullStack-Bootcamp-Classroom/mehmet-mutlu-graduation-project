import React, { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import CartTotal from "../../components/CartTotal/CartTotal";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { CartContext } from "../../context/CartContext";
import { OrderItem } from "../../types/types";
import "./cart.scss";

const Cart: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <>
      <div className="cart">
        <div className="cart-title">Sepetiniz</div>
        {cartItems.length > 0 ? (
          <div className="cart-container">
            <div className="cart-container-items">
              {cartItems.map((item: OrderItem) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="cart-container-total">
              <CartTotal items={cartItems} />
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

export default Cart;
