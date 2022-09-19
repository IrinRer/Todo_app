import { addDoc } from 'firebase/firestore';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { tasksCollection } from 'server/firebaseCollection';
import { getInputState, getInputTask } from 'store/tasks/selectors';
import Fieldset from './Fieldset';
import styles from './index.module.scss';
import Input from './Input';

const ModalItem = () => {
  const inputTask = useAppSelector(getInputTask);
  const inputState = useAppSelector(getInputState);

  const handleClick = () => {
    if (inputTask) {
      addDoc(tasksCollection, {
        description: inputTask,
        state: inputState,
        ready: false,
      });
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_input_text}>
        <p>CREATE TASK</p>
        <Input />
      </div>
      <Fieldset />
      <button type="button" onClick={handleClick} className={styles.btn}>
        Submit
      </button>
    </div>
  );
};

export default ModalItem;
