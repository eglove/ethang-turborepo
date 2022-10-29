import { useEffect, useRef } from 'react';

export const usePrevious = <Type>(value: Type): Type | undefined => {
  const reference = useRef<Type>();

  useEffect(() => {
    reference.current = value;
  }, [value]);

  return reference.current;
};
