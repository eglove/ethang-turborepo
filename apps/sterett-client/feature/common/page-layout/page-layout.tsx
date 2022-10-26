import Head from 'next/head';
import { TrussHeader, TrussNextLink } from 'trussworks-next-components';

import styles from './page-layout.module.css';

type PageLayoutProperties = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

export function PageLayout({
  children,
  title = 'Sterett Creek Village Trustee',
}: PageLayoutProperties): JSX.Element {
  const NavigationItems = [
    <TrussNextLink href="/" key="home">
      Home
    </TrussNextLink>,
    <TrussNextLink href="/news" key="news">
      News
    </TrussNextLink>,
    <TrussNextLink href="/calendar" key="calendar">
      Calendar
    </TrussNextLink>,
    <TrussNextLink href="/covenants" key="covenants">
      Covenants
    </TrussNextLink>,
    <TrussNextLink href="/meeting-minutes" key="meeting-minutes">
      Meeting Minutes
    </TrussNextLink>,
    <TrussNextLink href="/gallery" key="gallery">
      Pictures
    </TrussNextLink>,
    <TrussNextLink href="/trustees" key="trustees">
      Trustees
    </TrussNextLink>,
    <TrussNextLink href="/page" key="page">
      More
    </TrussNextLink>,
  ];

  return (
    <div className={styles.NavigationList}>
      <Head>
        <title>{title}</title>

        {/* Favicons */}
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/site.webmanifest" rel="manifest" />
        <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content="#ffc40d" name="msapplication-TileColor" />
        <meta content="/public/browserconfig.xml" name="msapplication-config" />
        <meta content="#ffffff" name="theme-color" />
        {/* Favicons */}
      </Head>
      <TrussHeader menuItems={NavigationItems} title={title} type="extended" />
      {children}
    </div>
  );
}
