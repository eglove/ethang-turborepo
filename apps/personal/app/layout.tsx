import './globals.css';

type RootLayoutProperties = {
  children: JSX.Element | JSX.Element[];
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
      <main>{children}</main>
    </html>
  );
}
