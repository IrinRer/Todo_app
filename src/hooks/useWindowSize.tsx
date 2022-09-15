import { useEffect, useState } from 'react';

interface ISize {
  width: number;
  height: number;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let value = true;

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    if (value) {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      value = false;
    };
  }, [windowSize.height, windowSize.width]);
  return windowSize;
};
