import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import Login from './Login';
import SignUp from './SignUp';
// import SignUp from './SignUp';

const AuthContainer = () => {
  return (
    <main className={styles.main}>
      {/* <SignUp /> */}
      <Login/>
      <Link to='/sign-up'>or register</Link>
    </main>
  );
};

export default AuthContainer;
