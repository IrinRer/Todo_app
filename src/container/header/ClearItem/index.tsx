import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React from 'react';
import { clearCompleted } from 'store/tasks/slice';
import styles from './index.module.scss';

const ClearItem = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(clearCompleted());
    
  };

  return (
    <button type="button" className={styles.clear} onClick={handleClick}>
      Clear completed
    </button>
  );
};

export default ClearItem;
