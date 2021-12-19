import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import "./cardOverlay.scss";

const CardOverlay: React.FC = () => {
  return (
      <div className="card-overlay">
        <button className="card-overlay-link">
          <FontAwesomeIcon
            className="card-overlay-link-icon"
            icon={faSearchPlus}
            size="5x"
          />
        </button>
      </div>
  );
};

export default CardOverlay;