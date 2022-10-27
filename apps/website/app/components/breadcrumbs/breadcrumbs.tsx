import type { AnchorHTMLAttributes } from 'react';

import styles from './breadcrumbs.module.css';
import { Crumb } from './crumb';

export type LinkProperties = {
  href: string;
  label: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type BreadcrumbsProperties = {
  links: LinkProperties[];
};

export function Breadcrumbs({ links }: BreadcrumbsProperties): JSX.Element {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        itemScope
        className={styles.BreadCrumbs}
        itemType="https://schema.org/BreadcrumbList"
      >
        {links.map((link, index) => {
          return <Crumb key={link.href} link={link} position={index} />;
        })}
      </ol>
    </nav>
  );
}
