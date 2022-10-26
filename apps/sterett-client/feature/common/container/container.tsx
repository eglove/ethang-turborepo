import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import styles from './container.module.css';

type ContainerProperties = {
  children: ReactNode | ReactNode[];
  containerProperties?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

export function Container({
  children,
  containerProperties,
}: ContainerProperties): JSX.Element {
  return (
    <div
      {...containerProperties}
      className={`${containerProperties?.className ?? ''} ${
        styles.Container ?? ''
      }`}
    >
      {children}
    </div>
  );
}
