import { db } from 'server/firebase';
import { collection } from 'firebase/firestore';

export const tasksCollection = collection(db, 'tasks');
export const statesCollection = collection(db, 'states');
