import React from 'react';
import { ITaskItem } from 'store/tasks/types';
import TaskFilter from './TaskFilter';

interface IProps {
  tasks: Array<ITaskItem>;
  handleClick: (id: string, ready: boolean) => void;
  state: string | null;
}

const Tasks: React.FC<IProps> = ({ tasks, handleClick, state }) => {
  return <TaskFilter tasks={tasks} handleClick={handleClick} state={state} />;
};

export default Tasks;
