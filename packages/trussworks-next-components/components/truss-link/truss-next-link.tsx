import type { LinkProps } from 'next/link';
import Link from 'next/link';

type TrussLinkProperties = {
  children: string | JSX.Element | JSX.Element[];
  href: string;
  isNewTab?: boolean;
  linkProperties?: LinkProps;
};

export function TrussNextLink({
  linkProperties,
  children,
  href,
  isNewTab,
}: TrussLinkProperties): JSX.Element {
  const styleClass =
    isNewTab === true ? `usa-link usa-link--external` : `usa-link`;

  return (
    <Link
      className={styleClass}
      href={href}
      rel={isNewTab === true ? 'noreferrer' : ''}
      target={isNewTab === true ? '_blank' : ''}
      {...linkProperties}
    >
      {children}
    </Link>
  );
}
