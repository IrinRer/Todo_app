import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from '../Form';

const SignUp = () => {
  const handleClick = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  };

  return <Form text="Sign Up" handleClick={handleClick} />;
};

export default SignUp;
