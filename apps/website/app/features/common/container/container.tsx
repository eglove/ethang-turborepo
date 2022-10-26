import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './container.module.css';

type ContainerProperties = {
  children: JSX.Element[] | JSX.Element;
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
      className={`${containerProperties?.className ?? ''} ${styles.Container}`}
    >
      {children}
    </div>
  );
}
