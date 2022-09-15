import React from 'react';
import styles from './index.module.scss';

interface IProps {
  handleClick: () => void;
}

const ClearBtn: React.FC<IProps> = ({ handleClick }) => {
  return (
    <button type="button" className={styles.clear} onClick={handleClick}>
      Clear completed
    </button>
  );
};

export default ClearBtn;
