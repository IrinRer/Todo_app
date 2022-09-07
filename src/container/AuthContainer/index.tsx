import React from 'react';
import styles from './index.module.scss';
import Login from './Login';
// import SignUp from './SignUp';

const AuthContainer = () => {
  return (
    <main className={styles.main}>
      {/* <SignUp /> */}
      <Login/>
    </main>
  );
};

export default AuthContainer;
