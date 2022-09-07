import React, { useState } from 'react';
import ButtonContainer from './Button';

const Form = ({ text, handleClick }) => {
  const [emailValue, setEmailValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  const handleChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };
  return (
    <form>
      {text}
      <label>
        Email
        <input onChange={handleChangeEmail} value={emailValue} type="email" />
      </label>
      <label>
        Password
        <input
          onChange={handleChangePassword}
          value={passwordValue}
          type="password"
        />
      </label>
      <ButtonContainer text={text} handleClick={handleClick}/>
    </form>
  );
};

export default Form;
