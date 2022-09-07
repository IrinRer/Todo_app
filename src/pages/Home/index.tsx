import Header from 'container/Header';
import { collection, getDocs } from 'firebase/firestore';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, {useEffect, useState} from 'react';
import { db } from 'server/firebase';

const Home = () => {
  const tasksCollection = collection(db, 'states');
//   const dispatch = useAppDispatch();
  const [task, setTask] = useState<any>();

  useEffect(() => {
   const getTasks = async () => {
    const data = await getDocs(tasksCollection);
    setTask(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ))
   }

   getTasks();
   // eslint-disable-next-line
  }, []);

  return <Header />;
};

export default Home;
