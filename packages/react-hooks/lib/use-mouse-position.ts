import { useEffect, useState } from 'react';

type MousePosition = {
  mouseX?: number;
  mouseY?: number;
};

export const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  const updateMousePosition = (event: MouseEvent): void => {
    setMousePosition({ mouseX: event.clientX, mouseY: event.clientY });
  };

  useEffect(() => {
    addEventListener('mousemove', updateMousePosition);

    return (): void => {
      removeEventListener('mousemove', updateMousePosition);
    };
  });

  return mousePosition;
};
