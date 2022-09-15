import StateBlock from 'component/StateBlock';
import React from 'react';
import { ITaskItem } from 'store/tasks/types';
import styles from './index.module.scss';

interface IProps {
  tasks: Array<ITaskItem>;
  handleClick: (id: string, ready: boolean) => void;
}

const Tasks: React.FC<IProps> = ({ tasks, handleClick }) => {
  return (
    <>
      {tasks.map((item: ITaskItem, index) => (
        <div className={styles.wrapper} key={item.id}>
          <div className={styles.wrapper_checkbox}>
            <div
              className={item.ready ? styles.label_checked : styles.label}
              onClick={() => handleClick(item.id, item.ready)}
            />
            <p>{item.description}</p>
          </div>
          <StateBlock state={item.state} index={index}/>
        </div>
      ))}
    </>
  );
};

export default Tasks;
