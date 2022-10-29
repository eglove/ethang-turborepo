import { useEffect, useState } from 'react';
import { animationInterval } from 'util-typescript';

export const useDebounce = <ValueType>(
  value: ValueType,
  delay = 300
): ValueType => {
  const [debouncedValue, setDebouncedValue] = useState<ValueType>(value);

  useEffect(() => {
    const controller = new AbortController();

    animationInterval(delay, controller.signal, () => {
      setDebouncedValue(value);
    });

    return (): void => {
      controller.abort();
    };
  }, [delay, value]);

  return debouncedValue;
};
