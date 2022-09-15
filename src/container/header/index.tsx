import { MOBILE_ADAPTIVE_WIDTH } from 'constants/common';
import { useWindowSize } from 'hooks/useWindowSize';
import React from 'react';
import AddItemsContainer from './AddItemsContainer';
import BtnAddNewTask from './BtnAddNewTask';
import ExitContainer from './ExitContainer';
import styles from './index.module.scss';

const Header = () => {
  const size = useWindowSize();

  return (
    <div className={styles.wrapper}>
      {size.width > MOBILE_ADAPTIVE_WIDTH ? (
        <AddItemsContainer />
      ) : (
        <BtnAddNewTask />
      )}
      <ExitContainer />
    </div>
  );
};

export default Header;
