import React from 'react';
import { createPortal } from 'react-dom';
import styles from './index.module.scss';
import ModalItem from './ModalItem';

const Modal = ({ isOpen, setOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modal}>
      <ModalItem/>
    </div>,
    document.body,
  );
};

export default Modal;
