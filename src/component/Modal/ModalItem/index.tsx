import React from 'react';
import Fieldset from './Fieldset';
import styles from './index.module.scss';
import Input from './Input';

const ModalItem = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_input_text}>
        <p>CREATE TASK</p>
        <Input />
      </div>
      <Fieldset />
      {children}
    </div>
  );
};

export default ModalItem;
