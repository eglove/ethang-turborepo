import './button.css';

import type { ButtonHTMLAttributes } from 'react';

const SIZES = {
  large: {
    borderRadius: '4px',
    fontSize: `${21 / 16}rem`,
    padding: '16px 32px',
  },
  medium: {
    borderRadius: '2px',
    fontSize: `${18 / 16}rem`,
    padding: '12px 20px',
  },
  small: {
    borderRadius: '2px',
    fontSize: `${1}rem`,
    padding: '4px 12px',
  },
};

type ButtonProperties = {
  buttonProperties?: ButtonHTMLAttributes<HTMLButtonElement>;
  size: keyof typeof SIZES;
  text: string;
  variant?: 'Fill' | 'Outline' | 'Ghost';
};

export function Button({
  buttonProperties,
  size,
  text,
  variant = 'Fill',
}: ButtonProperties): JSX.Element {
  const derivedStyles = SIZES[size];

  return (
    <button
      type="button"
      {...buttonProperties}
      style={{ ...derivedStyles, ...buttonProperties?.style }}
      className={`${'ButtonElement'} ${variant} ${
        buttonProperties?.className ?? ''
      }`}
    >
      {text}
    </button>
  );
}
