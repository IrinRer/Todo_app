import React from 'react';
import styles from './index.module.scss';

interface IProps {
  state: string;
  index: number;
}

const StateBlock: React.FC<IProps> = ({ state, index }) => {
  return (
    <div className={styles.div_stated} data-state={state} data-order={index}>
      {state}
    </div>
  );
};

export default StateBlock;
