import { useEffect, useState } from 'react';
import { isBrowser } from 'util-typescript';

export const useWindowSize = (
  initialWidth = Number.POSITIVE_INFINITY,
  initialHeight = Number.POSITIVE_INFINITY
): { height: number; width: number } => {
  const [state, setState] = useState<{ height: number; width: number }>({
    height: isBrowser ? window.innerHeight : initialHeight,
    width: isBrowser ? window.innerWidth : initialWidth,
  });

  useEffect((): (() => void) | void => {
    if (isBrowser) {
      const handler = (): void => {
        setState({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      };

      addEventListener('resize', handler);

      return (): void => {
        removeEventListener('resize', handler);
      };
    }
  }, []);

  return state;
};
