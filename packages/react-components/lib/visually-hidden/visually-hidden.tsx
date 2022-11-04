'use client';

import type { HTMLAttributes } from 'react';
import { useEffect, useState } from 'react';

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

      const handleKeyUp = (): void => {
        setForceShow(false);
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
    return <div>{children}</div>;
  }

  return (
    <div className="visually-hidden" {...divProperties}>
      {children}
    </div>
  );
}
