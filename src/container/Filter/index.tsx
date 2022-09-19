import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { MOBILE_ADAPTIVE_WIDTH } from 'constants/common';
import { useWindowSize } from 'hooks/useWindowSize';
import { getStates } from 'store/states/selectors';
import classnames from 'classnames';
import { getFilterState } from 'store/tasks/selectors';
import { setFilterState } from 'store/tasks/slice';
import styles from './index.module.scss';
import FilterSwiper from './FilterSwiper';

const Filter = () => {
  const states = useAppSelector(getStates);
  const state = useAppSelector(getFilterState);
  const dispatch = useAppDispatch();
  const size = useWindowSize();

  const handleClick = (e) => {
    dispatch(setFilterState(e.target.dataset.state));
  };

  return (
    <div className={styles.wrapper}>
      {size.width > MOBILE_ADAPTIVE_WIDTH
        ? states.map((item) => (
            <button
              type="button"
              className={classnames(styles.btn, {
                [styles.btn_active]: item.state === state,
              })}
              data-state={item.state}
              onClick={handleClick}
              key={item.state}
            >
              {item.state}
            </button>
          ))
        : <FilterSwiper/>}
    </div>
  );
};

export default Filter;
