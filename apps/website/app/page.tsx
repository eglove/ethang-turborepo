import Image from 'next/image';
import { NextLink } from 'next-components';

import { Container } from './components';
import { getHomeImages } from './data';
import styles from './page.module.css';

export default async function Home(): Promise<JSX.Element> {
  const images = await getHomeImages();

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
                <Image
                  alt={logo.description}
                  height={100}
                  src={logo.image.asset.url}
                  width={100}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
