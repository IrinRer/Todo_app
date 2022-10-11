import React from 'react';
import styles from './index.module.scss';

interface IProps {
  state: string;
}

const StateBlock: React.FC<IProps> = ({ state }) => {
  return (
    <div className={styles.div_stated} data-state={state}>
      {state}
    </div>
  );
};

export default StateBlock;
