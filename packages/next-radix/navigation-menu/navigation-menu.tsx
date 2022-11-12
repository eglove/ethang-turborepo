'use client';
import type { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import * as Navigation from '@radix-ui/react-navigation-menu';
import { Children } from 'react';

type NavigationMenuProperties = {
  children: JSX.Element | JSX.Element[];
  navProperties?: NavigationMenuProps;
};

export function NavigationMenu({
  navProperties,
  children,
}: NavigationMenuProperties): JSX.Element {
  const items = Children.toArray(children);

  return (
    <Navigation.Root {...navProperties}>
      <Navigation.List>
        {items.map(child => {
          const castChild = child as JSX.Element & { key: string };

          return (
            <Navigation.Item key={castChild.key}>
              <Navigation.Link asChild>{castChild}</Navigation.Link>
            </Navigation.Item>
          );
        })}
      </Navigation.List>
    </Navigation.Root>
  );
}
