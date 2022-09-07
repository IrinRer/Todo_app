import ExitComponent from 'component/Header/Exit';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React from 'react';
import { resetAuthorization } from 'store/auth/slice';

const ExitContainer = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(resetAuthorization());
  };
  return <ExitComponent handleClick={handleClick} />;
};

export default ExitContainer;
