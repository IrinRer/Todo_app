import React from 'react';
import BtnAddNewTask from '../BtnAddNewTask';
import styles from './index.module.scss';

const AddItemsContainer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.task}>5 task</p>
      <BtnAddNewTask />
      <button type="button" className={styles.clear}>
        Clear completed
      </button>
    </div>
  );
};

export default AddItemsContainer;
