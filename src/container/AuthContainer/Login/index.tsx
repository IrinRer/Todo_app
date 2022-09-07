import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from '../Form';

const Login = () => {
  const handleClick = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return <Form text="Login In" handleClick={handleClick} />;
};

export default Login;
