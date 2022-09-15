import Header from 'container/Header';
import TaskCard from 'container/TaskCard';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
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
    onSnapshot(tasksCollection, (snapshot) => {
      dispatch(
        setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
      );
    });

    const getStates = async () => {
      const data = await getDocs(statesCollection);
      dispatch(setStatesTasks(data.docs.map((doc) => ({ ...doc.data() }))));
    };

    getStates();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <TaskCard />
    </>
  );
};

export default Home;
