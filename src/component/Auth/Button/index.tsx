import React from 'react';

interface IProps {
  text: string;
  handleSubmit: (e: any) => void;
}

const ButtonComponent: React.FC<IProps> = ({ text, handleSubmit }) => {
  return (
    <button type="submit" onClick={handleSubmit}>
      {text}
    </button>
  );
};

export default ButtonComponent;
