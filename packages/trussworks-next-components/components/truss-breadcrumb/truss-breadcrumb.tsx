import {
  Breadcrumb,
  BreadcrumbBar,
  BreadcrumbLink,
} from '@trussworks/react-uswds';
import React from 'react';

export type LinkProperties = {
  href: string;
  title: string;
};

export type TrussBreadcrumbProperties = {
  links: LinkProperties[];
};

export function TrussBreadcrumb({
  links,
}: TrussBreadcrumbProperties): JSX.Element {
  return (
    <BreadcrumbBar variant="wrap">
      {links.map(link => {
        return (
          <TrussBreadcrumbItem
            href={link.href}
            key={`${link.title}${link.href}`}
            title={link.title}
          />
        );
      })}
    </BreadcrumbBar>
  );
}

function TrussBreadcrumbItem({ title, href }: LinkProperties): JSX.Element {
  return (
    <Breadcrumb>
      <BreadcrumbLink href={href}>
        <span>{title}</span>
      </BreadcrumbLink>
    </Breadcrumb>
  );
}
