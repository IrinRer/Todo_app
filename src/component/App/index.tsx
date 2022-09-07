import AddItemsContainer from 'container/header';
import React from 'react';
import styles from './index.module.scss';

const App = () => {
  return (
    <div className={styles.wrappper}>
      <AddItemsContainer/>;
    </div>
  )
};

export default App;
