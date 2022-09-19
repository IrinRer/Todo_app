import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React, { useState } from 'react';
import { getStates } from 'store/states/selectors';
import classnames from 'classnames';
import { getFilterState } from 'store/tasks/selectors';
import { setFilterState } from 'store/tasks/slice';
import styles from './index.module.scss';

const Filter = () => {
  const states = useAppSelector(getStates);
  const [clickState, setClickState] = useState();
  const state = useAppSelector(getFilterState);
  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    dispatch(setFilterState(e.target.dataset.state));
    setClickState(e.target.dataset.state);
  };

  return (
    <div className={styles.wrapper}>
      {states.map((item) => (
        <button
          type="button"
          className={classnames(styles.btn, {
            [styles.btn_active]: item.state === state
          })}
          data-state={item.state}
          onClick={handleClick}
        >
          {item.state}
        </button>
      ))}
    </div>
  );
};

export default Filter;
