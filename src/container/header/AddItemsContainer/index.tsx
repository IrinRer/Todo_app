import BtnAddNewTask from 'component/Header/BtnAddNewTask';
import React from 'react';
import ClearItem from '../ClearItem';
import styles from './index.module.scss';

const AddItemsContainer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.task}>5 task</p>
      <BtnAddNewTask />
      <ClearItem/>
    </div>
  );
};

export default AddItemsContainer;
