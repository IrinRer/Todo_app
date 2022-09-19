import { useAppSelector } from 'hooks/redux/useAppSelector';
import { getStates } from 'store/states/selectors';
import React from 'react';
import styles from './index.module.scss';

const RadioBtn = () => {
  const states = useAppSelector(getStates);
  const handleClick = () => {
    
  }

  return (
    <div className={styles.wrapper}>
      {states.map((item) => (
        <>
          <button
            type="button"
            data-state={item.state}
            className={styles.label}
            onClick={handleClick}
          >
            {item.state}
          </button>
          {/* <label data-state={item.state} className={styles.label}>{item.state}</label> */}
          {/* <input type="radio" /> */}
        </>
      ))}
    </div>
  );
};

export default RadioBtn;
