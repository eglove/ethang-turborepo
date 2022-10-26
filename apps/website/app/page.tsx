import { NextLink, SanityNextImage } from 'next-components';
import { use } from 'react';

import { getHomeImages } from './data';
import { Container } from './features/common';
import styles from './page.module.css';

export default function Home(): JSX.Element {
  const images = use(getHomeImages());

  return (
    <Container>
      <div className={styles.HomeText}>
        <h1>I&apos;m Ethan Glover</h1>
        <h2>I&apos;m a Software Craftsman.</h2>
        <p>
          <NextLink linkProperties={{ href: '/about-me' }}>
            Learn more about me here.
          </NextLink>
        </p>
        <div className={styles.Logos}>
          {images?.map(logo => {
            return (
              <div className={styles.LogoContainer} key={logo._id}>
                <SanityNextImage
                  altText={logo.description}
                  image={logo.image}
                  containerProperties={{
                    style: {
                      height: 100,
                      width: 100,
                    },
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
