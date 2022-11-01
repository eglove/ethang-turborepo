import './globals.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import { Header } from './components';
import { AnalyticsWrapper } from './components/analytics/analytics';
import styles from './page.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
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
        <meta charSet="UTF-8" />
        <meta content="width=device-width" name="viewport" />
      </head>
      <main className={styles.ContentContainer}>
        <Header />
        {children}
        <AnalyticsWrapper />
      </main>
    </html>
  );
}
