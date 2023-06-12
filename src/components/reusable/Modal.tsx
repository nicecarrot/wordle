import { createPortal } from "react-dom";
import styles from "../../styles/reusable/_modal.module.scss";

interface ModalProps {
  message: string;
}

const Modal = ({ message}: ModalProps) => {
  const portal =
    document.getElementById("portal") as HTMLElement;

  return portal
    ? createPortal(<div className={`${styles.modal_container}`}>{message}</div>, portal)
    : null;
};

export default Modal;
