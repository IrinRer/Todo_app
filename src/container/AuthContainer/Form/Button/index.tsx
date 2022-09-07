import React from 'react';
import ButtonComponent from 'component/Auth/Button';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import { getEmail, getPassword } from 'store/auth/selectors';

const ButtonContainer = ({text, handleClick}) => {
  const email = useAppSelector(getEmail);
  const password = useAppSelector(getPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(authorization());
    handleClick(email, password)
  };
  return <ButtonComponent text={text} handleSubmit={handleSubmit} />;
};

export default ButtonContainer;