import { NextLink } from 'next-components';
import { NavigationMenu } from 'next-radix/navigation-menu/navigation-menu';

import styles from './header.module.css';

export function Navigation(): JSX.Element {
  const navLinks = [
    {
      link: '/blog',
      title: 'Blog',
    },
    {
      link: '/portfolio',
      title: 'Components',
    },
    {
      link: '/courses',
      title: 'Courses',
    },
    {
      link: '/resume',
      title: 'Resume',
    },
  ];

  return (
    <NavigationMenu navProperties={{ className: styles.Navigation }}>
      {navLinks.map(navLink => {
        return (
          <NextLink
            key={navLink.title}
            linkProperties={{
              href: navLink.link,
            }}
          >
            {navLink.title}
          </NextLink>
        );
      })}
    </NavigationMenu>
  );
}
