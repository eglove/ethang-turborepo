import Image from 'next/image';
import { NextLink } from 'next-components';

import styles from './header.module.css';
import { Navigation } from './navigation';

export function Header(): JSX.Element {
  const headerContent = <header className={styles.Header}>EthanG</header>;

  return (
    <div className={styles.HeaderContainer}>
      <div>
        <NextLink
          linkProperties={{ href: '/', style: { textDecoration: 'none' } }}
        >
          {headerContent}
        </NextLink>
        <Navigation />
      </div>
      <div className={styles.SocialLinks}>
        <NextLink linkProperties={{ href: 'https://github.com/eglove' }}>
          <Image alt="GitHub" height={40} src="/images/github.svg" width={40} />
        </NextLink>
        <NextLink
          linkProperties={{
            href: 'https://www.linkedin.com/in/ethan-glover/',
          }}
        >
          <Image
            alt="GitHub"
            height={40}
            src="/images/linkedin.svg"
            width={40}
          />
        </NextLink>
      </div>
    </div>
  );
}
