import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getInputTask } from 'store/tasks/selectors';
import { setInputTask } from 'store/tasks/slice';
import styles from './index.module.scss';

const Input = () => {
  const dispatch = useAppDispatch();
  const inputTask = useAppSelector(getInputTask);

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    dispatch(setInputTask(target.value));
  };

  return (
    <input
      type="text"
      placeholder="Task description..."
      className={styles.input}
      onChange={handleChange}
      value={inputTask}
    />
  );
};

export default Input;
