type RootLayoutProperties = {
  children: JSX.Element | JSX.Element[];
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
