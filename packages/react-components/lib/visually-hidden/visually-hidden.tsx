'use client';

import {
  type CSSProperties,
  type HTMLAttributes,
  useEffect,
  useState,
} from 'react';

const hiddenStyles: CSSProperties = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  display: 'inline-block',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: 1,
};

type VisuallyHiddenProperties = {
  children: JSX.Element | JSX.Element[] | string | number;
  divProperties?: HTMLAttributes<HTMLDivElement>;
};

export function VisuallyHidden({
  children,
  divProperties,
}: VisuallyHiddenProperties): JSX.Element {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env['NODE_ENV'] !== 'production') {
      const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Alt') {
          setForceShow(true);
        }
      };

      const handleKeyUp = (event: KeyboardEvent): void => {
        if (event.key === 'Alt') {
          setForceShow(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }

    return () => {
      //
    };
  }, []);

  if (forceShow) {
    return children as JSX.Element;
  }

  return (
    <span style={hiddenStyles} {...divProperties}>
      {children}
    </span>
  );
}
