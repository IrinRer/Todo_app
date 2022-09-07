import React from 'react';
import Form from './Form';
import styles from './index.module.scss';

const AuthContainer = () => {
  const handleClick = () => {
    console.log('handleClick');
  };
  return (
    <main className={styles.main}>
      <Form text="Autorization" handleClick={handleClick} />
    </main>
  );
};

export default AuthContainer;
