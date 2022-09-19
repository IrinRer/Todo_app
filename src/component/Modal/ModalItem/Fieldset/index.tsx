import React from 'react';
import styles from './index.module.scss';

const Fieldset = () => {
  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.legend}>Categories</legend>
    </fieldset>
  );
};

export default Fieldset;
