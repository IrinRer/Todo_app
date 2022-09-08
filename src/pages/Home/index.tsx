import Tasks from 'component/Tasks';
import Header from 'container/Header';
import { collection, getDocs } from 'firebase/firestore';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { db } from 'server/firebase';
import { setStatesTasks } from 'store/states/slice';
import { setTasks } from 'store/tasks/slice';

const Home = () => {
  const statesCollection = collection(db, 'states');
  const tasksCollection = collection(db, 'tasks');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getStates = async () => {
      const data = await getDocs(statesCollection);
      dispatch(setStatesTasks(data.docs.map((doc) => ({ ...doc.data() }))));
    };

    const getTasks = async () => {
      const data = await getDocs(tasksCollection);
      dispatch(setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id}))));
    };

    getStates();
    getTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Tasks />
    </>
  );
};

export default Home;
