import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./modal.scss";
import { createPortal } from "react-dom";

const Modal: React.FC<React.ReactNode> = ({ children }) => {
  const modalRender = (
    <>
      <div className="modal-backdrop"></div>
      <div className="modal-wrapper">
        <div className="modal-wrapper-content">
          <button className="modal-wrapper-content-button">
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
          {children}
        </div>
      </div>
    </>
  );
  return <>{createPortal(modalRender, document.getElementById("modal")!)}</>;
};

export default Modal;
