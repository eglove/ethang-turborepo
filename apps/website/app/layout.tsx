import './globals.css';

import Script from 'next/script';

import { Header } from './components';
import { AnalyticsWrapper } from './components/analytics/analytics';
import { HeadTag } from './components/head-tag/head-tag';
import styles from './page.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <HeadTag title="Home" />
        <link href="/favicon.ico" rel="icon" />
        <meta content="$ilp.uphold.com/XqPZ8mnNyprk" name="monetization" />
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
        <Script src="/prism/prism.js" />
      </head>
      <main className={styles.ContentContainer}>
        <Header />
        {children}
        <AnalyticsWrapper />
      </main>
    </html>
  );
}
