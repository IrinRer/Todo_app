import BtnAddNewTask from 'component/Header/BtnAddNewTask';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getNumberTasks } from 'store/tasks/selectors';
import ClearItem from '../ClearItem';
import styles from './index.module.scss';

const AddItemsContainer = () => {
  const tasksNumber = useAppSelector(getNumberTasks);
  return (
    <div className={styles.wrapper}>
      <p className={styles.task}>{tasksNumber} task</p>
      <BtnAddNewTask />
      <ClearItem />
    </div>
  );
};

export default AddItemsContainer;
