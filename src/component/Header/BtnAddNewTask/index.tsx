import Modal from 'component/Modal';
import React, { useState } from 'react';
import styles from './index.module.scss';

const BtnAddNewTask = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <button type="submit" className={styles.btn_add} onClick={handleClick}>
        Add new task
      </button>
      <Modal isOpen={isOpen} setOpen={setOpen}/>
    </>
  );
};

export default BtnAddNewTask;
