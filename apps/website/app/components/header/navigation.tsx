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
      link: '/courses',
      title: 'Courses',
    },
    {
      link: './files/Ethan-Glover-Resume.pdf',
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
