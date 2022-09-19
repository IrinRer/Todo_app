import { useAppSelector } from 'hooks/redux/useAppSelector';
import { setInputState } from 'store/tasks/slice';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { getStates } from 'store/states/selectors';
import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const RadioBtn = () => {
  const [btn, setBtn] = useState<string>('');
  const states = useAppSelector(getStates);
  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    dispatch(setInputState(e.target.dataset.state));
    setBtn(e.target.dataset.state);
  };

  return (
    <div className={styles.wrapper}>
      {states.map((item) => {
        if (item.state !== 'All') {
          return (
            <button
              type="button"
              data-state={item.state}
              className={classnames(styles.label, {
                [styles.label_active]: btn === item.state,
              })}
              onClick={handleClick}
            >
              {item.state}
            </button>
          );
        }
        return null;
      })}
    </div>
  );
};

export default RadioBtn;
