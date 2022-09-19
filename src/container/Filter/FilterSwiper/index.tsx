import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import { INDEX } from 'constants/common';
import { setFilterState } from 'store/tasks/slice';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { getStates } from 'store/states/selectors';

import 'swiper/css';
import styles from './index.module.scss';

const FilterSwiper = () => {
  const states = useAppSelector(getStates);
  const dispatch = useAppDispatch();

  const toDispatch = (arg: string) => {
    dispatch(setFilterState(arg));
  };

  const handleChange = ({ activeIndex }) => {
    switch (activeIndex) {
      case 0:
        toDispatch(INDEX.zero);
        break;
      case 1:
        toDispatch(INDEX.one);
        break;
      case 2:
        toDispatch(INDEX.two);
        break;
      case 3:
        toDispatch(INDEX.three);
        break;
      case 4:
        toDispatch(INDEX.four);
        break;
      case 5:
        toDispatch(INDEX.five);
        break;
      default:
        return null;
    }

    return null;
  };

  return (
    <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={handleChange}>
      {states.map((item) => (
        <SwiperSlide key={item.state}>
          <p className={styles.p_swiper}>{item.state}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FilterSwiper;
