import CreateRoutes from 'container/Routes';
import React from 'react';
import styles from './index.module.scss';

const App = () => {
  return (
    <div className={styles.wrappper}>
      <CreateRoutes/>
    </div>
  )
};

export default App;
