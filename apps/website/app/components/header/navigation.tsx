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
    <nav className={styles.Navigation}>
      {navLinks.map(navLink => {
        return (
          <NextLink
            key={navLink.title}
            linkProperties={{
              className: styles.NavigationLink,
              href: navLink.link,
            }}
          >
            {navLink.title}
          </NextLink>
        );
      })}
    </nav>
  );
}
