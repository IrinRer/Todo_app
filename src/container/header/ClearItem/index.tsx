import ClearBtn from 'component/Header/ClearItem';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React from 'react';
import { clearCompleted } from 'store/tasks/slice';

const ClearItem = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(clearCompleted());
  };

  return <ClearBtn handleClick={handleClick} />;
};

export default ClearItem;
