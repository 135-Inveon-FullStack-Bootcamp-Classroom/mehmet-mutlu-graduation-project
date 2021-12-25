import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import "./cardOverlay.scss";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

interface ICardOverlay {
  productId: number;
}

const CardOverlay: React.FC<ICardOverlay> = ({ productId }) => {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 415px)" });
  
  return (
    <div className="card-overlay">
      <Link
        to={{
          pathname: `/detail/${productId}`,
          state: { background: location },
        }}
        className="card-overlay-link"
      >
        <FontAwesomeIcon
          className="card-overlay-link-icon"
          icon={faSearchPlus}
          size={isMobile ? "2x" : "5x"}
        />
      </Link>
    </div>
  );
};

export default CardOverlay;
