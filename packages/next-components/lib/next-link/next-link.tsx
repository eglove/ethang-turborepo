import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

export type NextLinkProperties = {
  children: JSX.Element | JSX.Element[] | string;
  linkProperties: { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
  testId?: string;
};

export function NextLink({
  children,
  linkProperties,
}: NextLinkProperties): JSX.Element {
  let { href } = linkProperties;
  let newTabAttributes = {};

  try {
    const url = new URL(href);

    if (url.host === location.host) {
      href = url.pathname;
    } else {
      newTabAttributes = { rel: 'noreferrer', target: '_blank' };
    }
  } catch {
    //
  }

  return (
    <Link {...linkProperties} href={href} {...newTabAttributes}>
      {children}
    </Link>
  );
}
