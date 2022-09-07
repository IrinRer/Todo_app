import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React from 'react';
import { resetAuthorization } from 'store/auth/slice';
import Exit from '../../../asserts/icons/logout.png';
import styles from './index.module.scss';

const ExitComponent = ({handleClick}) => {
  return (
    <button type="button" className={styles.btn} onClick={handleClick}>
      <img src={Exit} alt="exit.png" />
    </button>
  );
};

export default ExitComponent;
