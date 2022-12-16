import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html lang="en-US">
      {/* @ts-expect-error use as JSX */}
      <Head />
      <body>
        <Main />
        {/* @ts-expect-error use as JSX */}
        <NextScript />
      </body>
    </Html>
  );
}
