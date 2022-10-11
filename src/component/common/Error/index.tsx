import React from 'react';
import Img404 from '../../../asserts/icons/404.gif';
import styles from './index.module.scss';

interface IProps {
  text: string;
}

const Error: React.FC<IProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <img src={Img404} alt="error.png" />
      <p>{text}</p>
    </div>
  );
};

export default Error;
