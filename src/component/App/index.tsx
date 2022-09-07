import AuthContainer from 'container/AuthContainer';
import React from 'react';
import styles from './index.module.scss';

const App = () => {
  return (
    <div className={styles.wrappper}>
      <AuthContainer/>
    </div>
  )
};

export default App;
