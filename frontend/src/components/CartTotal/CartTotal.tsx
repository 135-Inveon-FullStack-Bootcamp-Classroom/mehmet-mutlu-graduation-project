import React from "react";
import { OrderItem } from "../../types/types";
import "./cartTotal.scss";

interface ICartTotal {
  items: Array<OrderItem>;
}

const CartTotal: React.FC<ICartTotal> = ({ items }) => {
  const findTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item: OrderItem) => (totalPrice += item.price));
    return totalPrice;
  };
  return (
    <div className="cart-total">
      <h4 className="cart-total-title">Sepetinizin Toplamı</h4>
      <p className="cart-total-price">{findTotalPrice()} ₺</p>
      <button>Ödeme Yap</button>
    </div>
  );
};

export default CartTotal;
