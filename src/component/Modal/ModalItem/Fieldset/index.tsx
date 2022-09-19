import React from 'react';
import RadioBtn from '../RadioBtn';
import styles from './index.module.scss';

const Fieldset = () => {
  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.legend}>Categories</legend>
      <RadioBtn />
    </fieldset>
  );
};

export default Fieldset;
