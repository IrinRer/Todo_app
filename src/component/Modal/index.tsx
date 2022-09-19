import React from 'react';
import { createPortal } from 'react-dom';
import styles from './index.module.scss';
import ModalItem from './ModalItem';

const Modal = ({ isOpen, setOpen }) => {
  if (!isOpen) return null;

  const handleClick = (e) => {
    if (e.target.className === styles.modal) {
      setOpen(false);
    }
  };

  return createPortal(
    <div className={styles.modal} onClick={handleClick}>
      <ModalItem />
    </div>,
    document.body,
  );
};

export default Modal;
