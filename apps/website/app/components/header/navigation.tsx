'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NextLink } from 'next-components';

import styles from './header.module.css';

export function Navigation(): JSX.Element {
  const navLinks = [
    {
      link: '/blog',
      title: 'Blog',
    },
    {
      link: '/courses',
      title: 'Courses',
    },
    // {
    //   link: '/resume',
    //   title: 'Resume',
    // },
  ];

  return (
    <NavigationMenu.Root className={styles.Navigation}>
      {navLinks.map(navLink => {
        return (
          <NavigationMenu.Item key={navLink.link}>
            <NextLink
              linkProperties={{
                href: navLink.link,
              }}
            >
              {navLink.title}
            </NextLink>
          </NavigationMenu.Item>
        );
      })}
    </NavigationMenu.Root>
  );
}
