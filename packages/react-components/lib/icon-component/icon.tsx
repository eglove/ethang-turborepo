import './icon.css';

import type { HTMLAttributes } from 'react';
import { AtSign, ChevronDown, Search } from 'react-feather';

const icons = {
  'at-sign': AtSign,
  'chevron-down': ChevronDown,
  search: Search,
};

type IconProperties = {
  containerProperties?: HTMLAttributes<HTMLDivElement>;
  id: keyof typeof icons;
  size: number;
  strokeWidth?: number;
};

export function Icon({
  containerProperties,
  id,
  size,
  strokeWidth = 1,
}: IconProperties): JSX.Element {
  const Component = icons[id];
  const containerStyles = {
    height: `${size}px`,
    width: `${size}px`,
  };
  const svgStyles = {
    strokeWidth: `${strokeWidth}px`,
  };

  return (
    <div
      className="IconContainer"
      style={containerStyles}
      {...containerProperties}
    >
      <Component size={size} style={svgStyles} />
    </div>
  );
}
