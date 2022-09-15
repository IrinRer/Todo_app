import React from 'react';
import styles from './index.module.scss';

const BtnAddNewTask = () => {
  return (
    <button type="submit" className={styles.btn_add}>
      Add new task
    </button>
  );
};

export default BtnAddNewTask;