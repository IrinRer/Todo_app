import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/route';
import { useAuth } from 'hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { authorization, resetInput } from 'store/auth/slice';
import Form from '../Form';
import styles from './index.module.scss';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const [errorStyle, setErrorStyle] = useState(false);

  const handleClick = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          authorization({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        setErrorStyle(false);
      })
      .catch((error) => {
        dispatch(resetInput());
        setErrorStyle(true);
      });
  };

  return (
    <div className={styles.wrapper}>
      <Form
        text="Registration"
        handleClick={handleClick}
        errorStyle={errorStyle}
      />
      <p className={styles.p_link}>
        {isAuth
          ? 'You have successfully registered! You can come in'
          : 'Already have an account?'}
        <Link to={ROUTES.login.path}> Sign in</Link>
      </p>
    </div>
  );
};

export default SignUp;
