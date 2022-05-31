import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "../../styles/reusable/_modal.module.scss";

interface ModalProps {
  gameState: string;
}

const Modal = ({gameState}: ModalProps) => {
  const portal =
    gameState === "undefined" &&
    (document.getElementById("portal") as HTMLElement);

  return portal
    ? createPortal(<div className={styles.modal}>something</div>, portal)
    : null;
};

export default Modal;
