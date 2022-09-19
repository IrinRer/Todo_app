import { addDoc } from 'firebase/firestore';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { tasksCollection } from 'server/firebaseCollection';
import { getInputState, getInputTask } from 'store/tasks/selectors';
import { setInputTask } from 'store/tasks/slice';
import Fieldset from './Fieldset';
import styles from './index.module.scss';
import Input from './Input';

const ModalItem = () => {
  const inputTask = useAppSelector(getInputTask);
  const inputState = useAppSelector(getInputState);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (inputTask) {
      addDoc(tasksCollection, {
        description: inputTask,
        state: inputState,
        ready: false,
      });
      dispatch(setInputTask(''));
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_input_text}>
        <p>CREATE TASK</p>
        <Input />
      </div>
      <Fieldset />
      <button
        type="button"
        onClick={handleClick}
        className={styles.btn}
        disabled={!inputTask}
      >
        Submit
      </button>
    </div>
  );
};

export default ModalItem;
