import './breadcrumbs.css';

import type { AnchorHTMLAttributes } from 'react';
import { uuid } from 'util-typescript';

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
        className="BreadCrumbs"
        itemType="https://schema.org/BreadcrumbList"
      >
        {links.map((link, index) => {
          return <Crumb key={uuid()} link={link} position={index} />;
        })}
      </ol>
    </nav>
  );
}
