import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./emptyCart.scss"

const EmptyCart: React.FC = () => {
  return (
    <div className="empty-cart">
      <FontAwesomeIcon
        style={{color: "#8d99ae"}}
        className="card-overlay-link-icon"
        icon={faShoppingCart}
        size={"9x"}
      />
      <p>Henüz sepetiniz boş! Alışverişe devam etmek için üstteki linkleri kullanabilirsiniz.</p>
    </div>
  );
};

export default EmptyCart;
