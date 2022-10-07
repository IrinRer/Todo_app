import React, { useState } from 'react';
import Tasks from 'component/Tasks';
import NotFoundTask from 'component/common/NotFoundTask';
import Filter from 'container/Filter';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from 'server/firebase';
import { getFilterState, getTasks } from 'store/tasks/selectors';
import styles from './index.module.scss';

const TaskCard = () => {
  const tasks = useAppSelector(getTasks);
  const state = useAppSelector(getFilterState);
  const [checkedStyled, setCheckedStyled] = useState(false);

  const handleClick = (id: string, ready: boolean) => {
    const taskDoc = doc(db, 'tasks', id);
    updateDoc(taskDoc, { ready: !ready });
    setCheckedStyled(!checkedStyled);
  };

  return (
    <div className={styles.wrapper}>
      {tasks.length === 0 ? (
        <NotFoundTask />
      ) : (
        <Tasks tasks={tasks} handleClick={handleClick} state={state} />
      )}
      <Filter />
    </div>
  );
};

export default TaskCard;
