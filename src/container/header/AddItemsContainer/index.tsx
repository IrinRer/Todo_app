import ExitComponent from 'component/Header/Exit';
import React from 'react';
import styles from './index.module.scss';

const AddItemsContainer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.task}>5 task</p>
      <button type="submit" className={styles.btn_add}>
        Add new task
      </button>
      <button type="button" className={styles.clear}>
        Clear completed
      </button>
    </div>
  );
};

export default AddItemsContainer;
