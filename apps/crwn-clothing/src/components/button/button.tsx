import type { ReactNode } from 'react';

import styles from './button.module.css';

type ButtonProperties = {
  children: ReactNode;
  properties?: JSX.IntrinsicElements['button'];
  variant?: keyof typeof variantClasses;
};

const variantClasses = {
  google: styles.GoogleSignIn,
  inverted: styles.Inverted,
};

export function Button({
  properties,
  children,
  variant,
}: ButtonProperties): JSX.Element {
  /* eslint-disable react/button-has-type */
  return (
    <button
      className={`${styles.ButtonContainer} ${
        variant === undefined ? '' : variantClasses[variant]
      }`}
      {...properties}
      type={properties?.type ?? 'button'}
    >
      {children}
    </button>
  );
}
