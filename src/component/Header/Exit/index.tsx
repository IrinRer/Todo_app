import React from 'react';
import Exit from '../../../asserts/icons/logout.png';
import styles from './index.module.scss';

interface IProps {
  handleClick: () => void;
}

const ExitComponent: React.FC<IProps> = ({ handleClick }) => {
  return (
    <button type="button" className={styles.btn} onClick={handleClick}>
      <img src={Exit} alt="exit.png" />
    </button>
  );
};

export default ExitComponent;
