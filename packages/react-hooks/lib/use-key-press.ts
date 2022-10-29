import { useEffect, useState } from 'react';

export const useKeyPress = (targetKey: string | number): boolean => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    const handleDown = ({ key }: KeyboardEvent): void => {
      if (key === targetKey) {
        setIsKeyPressed(true);
      }
    };

    const handleUp = ({ key }: KeyboardEvent): void => {
      if (key === targetKey) {
        setIsKeyPressed(false);
      }
    };

    addEventListener('keydown', handleDown);
    addEventListener('keyup', handleUp);

    return (): void => {
      removeEventListener('keydown', handleDown);
      removeEventListener('keyup', handleUp);
    };
  }, [targetKey]);

  return isKeyPressed;
};
