import React from 'react';
import ButtonComponent from 'component/Auth/Button';

const ButtonContainer = ({text, handleClick}) => {
//   const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(authorization());
    handleClick()
  };
  return <ButtonComponent text={text} handleSubmit={handleSubmit} />;
};

export default ButtonContainer;