import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./modal.scss";
import { createPortal } from "react-dom";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"

const modal = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 25,
    opacity: 0,
  },
};

const Modal: React.FC<React.ReactNode> = ({ children }) => {
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  const modalRender = (
    <>
      <div className="modal-backdrop" onClick={goBackHandler}></div>
      <motion.div
        animate="visible"
        initial="hidden"
        variants={modal}
        className="modal-wrapper"
      >
        <div className="modal-wrapper-content">
          <button
            className="modal-wrapper-content-button"
            onClick={goBackHandler}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
          {children}
        </div>
      </motion.div>
    </>
  );
  return <>{createPortal(modalRender, document.getElementById("modal")!)}</>;
};

export default Modal;
