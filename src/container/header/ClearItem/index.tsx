import React from 'react';
import styles from './index.module.scss';

const ClearItem = () => {
  const handleClick = () => {
    
  };

  return (
    <button type="button" className={styles.clear} onClick={handleClick}>
      Clear completed
    </button>
  );
};

export default ClearItem;
