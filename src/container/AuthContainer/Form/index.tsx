import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import classnames from 'classnames';
import { getEmail, getPassword } from 'store/auth/selectors';
import { changeInputLogin, changeInputPassword } from 'store/auth/slice';
import ButtonContainer from './Button';
import styles from './index.module.scss';

interface IProps {
  text: string;
  handleClick: (email?: string, password?: string) => void;
  errorStyle: boolean;
}

const Form: React.FC<IProps> = ({ text, handleClick, errorStyle }) => {
  const dispatch = useAppDispatch();
  const emailValue = useAppSelector(getEmail);
  const passwordValue = useAppSelector(getPassword);
  const className = classnames(styles.wrapper_form, {
    [styles.error_form]: errorStyle,
  });

  const handleChangeEmail = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    dispatch(changeInputLogin(target.value));
  };
  const handleChangePassword = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    dispatch(changeInputPassword(target.value));
  };
  return (
    <form className={className}>
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
