import { type ReactNode } from 'react';

type RootLayoutProperties = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProperties): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
