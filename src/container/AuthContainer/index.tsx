import React from 'react';
import Form from './Form';

const AuthContainer = () => {
  const handleClick = () => {
    console.log('handleClick');
  };
  return <Form text="Autorization" handleClick={handleClick} />;
};

export default AuthContainer;
