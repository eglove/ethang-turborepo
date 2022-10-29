import { useEffect } from 'react';
import type { IntervalCallback } from 'util-typescript';
import { animationInterval } from 'util-typescript';

export const useAnimationInterval = (
  ms: number,
  callback: IntervalCallback
): void => {
  useEffect(() => {
    const controller = new AbortController();

    animationInterval(ms, controller.signal, callback);

    return (): void => {
      controller.abort();
    };
  }, [callback, ms]);
};
