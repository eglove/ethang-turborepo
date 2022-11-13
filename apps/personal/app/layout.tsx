import './globals.css';

import type { ReactNode } from 'react';

type RootLayoutProperties = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProperties): JSX.Element {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
