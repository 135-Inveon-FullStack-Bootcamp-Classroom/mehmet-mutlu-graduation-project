import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { OrderItem } from "../../types/types";
import "./cartItem.scss";

interface ICartItem {
  item: OrderItem;
}

const CartItem: React.FC<ICartItem> = ({ item }) => {
  const location = useLocation();

  return (
    <div className="cart-items">
      <div className="cart-items-image">
        <Link
          className="cart-items-image-link"
          to={{
            pathname: `/detail/${item.id}`,
            state: { background: location },
          }}
        >
          <img src={item.imageURLs} alt="Cart Item" />
          <p>{item.name}</p>
        </Link>
      </div>
      <div className="cart-items-quantity">
        <button>
          {item.count === 1 ? (
            <FontAwesomeIcon
              style={{ color: "#e63946" }}
              className="card-overlay-link-icon"
              icon={faTrash}
              size={"2x"}
            />
          ) : (
            <FontAwesomeIcon
              className="card-overlay-link-icon"
              icon={faMinus}
              size={"2x"}
            />
          )}
        </button>
        <p>{item.count}</p>
        <button>
          <FontAwesomeIcon
            className="card-overlay-link-icon"
            icon={faPlus}
            size={"2x"}
          />
        </button>
      </div>
      <div className="cart-items-price">
        <p>{item.price * item.count} ₺</p>
      </div>
    </div>
  );
};

export default CartItem;
