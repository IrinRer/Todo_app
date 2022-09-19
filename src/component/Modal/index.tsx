import { addDoc } from 'firebase/firestore';
import React from 'react';
import { createPortal } from 'react-dom';
import styles from './index.module.scss';
import ModalItem from './ModalItem';

const Modal = ({ isOpen, setOpen }) => {
  if (!isOpen) return null;

  const handleClick = () => {
    // setOpen(false);

  };

  return createPortal(
    <div className={styles.modal}>
      <ModalItem>
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </ModalItem>
    </div>,
    document.body,
  );
};

export default Modal;
