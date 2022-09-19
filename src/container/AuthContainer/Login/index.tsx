import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/route';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from 'hooks/useAuth';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { authorization, resetInput } from 'store/auth/slice';
import Form from '../Form';
import styles from './index.module.scss';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {isAuth} = useAuth();
  const [errorStyle, setErrorStyle] = useState(false);

  const handleClick = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          authorization({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );

        if(isAuth) {
          navigate(ROUTES.home.path);
        }
      })
      .catch((error) => {
        dispatch(resetInput());
        setErrorStyle(true);
      });

  };

  return (
    <div className={styles.wrapper}>
      <Form text="Login In" handleClick={handleClick} errorStyle={errorStyle} />
      <Link to={ROUTES.signUp.path}>or register</Link>
    </div>
  );
};

export default Login;
