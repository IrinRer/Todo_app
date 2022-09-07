import React, { useState } from 'react';
import ButtonContainer from './Button';
import styles from './index.module.scss';

const Form = ({ text, handleClick }) => {
  const [emailValue, setEmailValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  const handleChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };
  return (
    <form className={styles.wrapper_form}>
      <p>{text}</p>
      <label className={styles.label}>
        Email
        <input
          onChange={handleChangeEmail}
          value={emailValue}
          type="email"
          placeholder="Enter email"
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          onChange={handleChangePassword}
          value={passwordValue}
          type="password"
          placeholder="Enter password"
        />
      </label>
      <ButtonContainer text={text} handleClick={handleClick} />
    </form>
  );
};

export default Form;
