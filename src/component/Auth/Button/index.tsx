import React from 'react';
import styles from './index.module.scss';

interface IProps {
  text: string;
  handleSubmit: (e) => void;
}

const ButtonComponent: React.FC<IProps> = ({ text, handleSubmit }) => {
  return (
    <button type="submit" onClick={handleSubmit} className={styles.btn}>
      {text}
    </button>
  );
};

export default ButtonComponent;
