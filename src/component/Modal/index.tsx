import React from 'react';
import { createPortal } from 'react-dom';
import styles from './index.module.scss';
import ModalItem from './ModalItem';

interface IProps {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}

const Modal: React.FC<IProps> = ({ isOpen, setOpen }) => {
  if (!isOpen) return null;

  const handleClick = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    if (target.className === styles.modal) {
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
