import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getEmail, getPassword } from 'store/auth/selectors';
import { changeInputLogin, changeInputPassword } from 'store/auth/slice';
import ButtonContainer from './Button';
import styles from './index.module.scss';

const Form = ({ text, handleClick }) => {
  const dispatch = useAppDispatch();
  const emailValue = useAppSelector(getEmail);
  const passwordValue = useAppSelector(getPassword);

  const handleChangeEmail = (e) => {
    dispatch(changeInputLogin(e.target.value));
  };
  const handleChangePassword = (e) => {
    dispatch(changeInputPassword(e.target.value));
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
