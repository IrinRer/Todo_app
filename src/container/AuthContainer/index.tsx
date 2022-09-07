import React from 'react';
import styles from './index.module.scss';
import Login from './Login';

const AuthContainer = () => {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
};

export default AuthContainer;
