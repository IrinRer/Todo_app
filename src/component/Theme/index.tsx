import React from 'react';
import { ReactComponent as Sun } from 'asserts/icons/Sun.svg';
import { ReactComponent as Moon } from 'asserts/icons/Moon.svg';
import { THEME } from 'constants/common';
import { useTheme } from 'hooks/useTheme';
import styles from './index.module.scss';

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const setDarkTheme = () => {
    setTheme(THEME.DARK);
  };

  const setLightTheme = () => {
    setTheme(THEME.LIGHT);
  };

  return (
    <div className={styles.wrapper}>
      {theme === THEME.LIGHT ? (
        <Sun onClick={setDarkTheme} />
      ) : (
        <Moon onClick={setLightTheme} />
      )}
    </div>
  );
};

export default Theme;
