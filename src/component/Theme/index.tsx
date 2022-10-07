import React from 'react';
import { ReactComponent as Sun } from 'asserts/icons/Sun.svg';
import { ReactComponent as Moon } from 'asserts/icons/Moon.svg';
import { useTheme } from 'hooks/useTheme';
import styles from './index.module.scss';

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const setDarkTheme = () => {
    setTheme('dark');
  };

  const setLightTheme = () => {
    setTheme('light');
  };

  return (
    <div className={styles.wrapper}>
      <Sun onClick={setDarkTheme} />
      <Moon onClick={setLightTheme} />
    </div>
  );
};

export default Theme;
