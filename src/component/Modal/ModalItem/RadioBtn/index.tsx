import { useAppSelector } from 'hooks/redux/useAppSelector';
import { setInputState } from 'store/tasks/slice';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { getStates } from 'store/states/selectors';
import React from 'react';
import styles from './index.module.scss';

const RadioBtn = () => {
  const states = useAppSelector(getStates);
  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    dispatch(setInputState(e.target.dataset.state));
  };

  return (
    <div className={styles.wrapper}>
      {states.map((item) => (
        <button
          type="button"
          data-state={item.state}
          className={styles.label}
          onClick={handleClick}
        >
          {item.state}
        </button>
      ))}
    </div>
  );
};

export default RadioBtn;
