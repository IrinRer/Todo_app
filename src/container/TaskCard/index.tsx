import React, { useState } from 'react';
import Tasks from 'component/Tasks';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from 'server/firebase';
import { getTasks } from 'store/tasks/selectors';
import styles from './index.module.scss';

const TaskCard = () => {
  const tasks = useAppSelector(getTasks);
  const [checkedStyled, setCheckedStyled] = useState(false);

  const handleClick = (id: string, ready: boolean) => {
    const taskDoc = doc(db, 'tasks', id);
    updateDoc(taskDoc, { ready: !ready });
    setCheckedStyled(!checkedStyled);
  };

  return (
    <div className={styles.wrapper}>
      <Tasks tasks={tasks} handleClick={handleClick} />
    </div>
  );
};

export default TaskCard;
