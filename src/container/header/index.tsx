import React from 'react';
import AddItemsContainer from './AddItemsContainer';
import ExitContainer from './ExitContainer';
import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <AddItemsContainer />
      <ExitContainer />
    </div>
  );
};

export default Header;
