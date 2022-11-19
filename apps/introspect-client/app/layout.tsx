import { type ReactNode } from 'react';

type RootLayoutProperties = {
  children: JSX.Element | JSX.Element[];
};

export default function RootLayout({
  children,
}: RootLayoutProperties): ReactNode {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
