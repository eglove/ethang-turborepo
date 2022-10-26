import {
  Header,
  NavMenuButton,
  PrimaryNav,
  Title,
} from '@trussworks/react-uswds';
import { NextLink } from 'next-components';
import { useState } from 'react';

type TrussBasicHeaderProperties = {
  menuItems: JSX.Element[];
  menuLabel?: string;
  rootUrl?: string;
  title: string;
  type?: 'basic' | 'extended';
};

export function TrussHeader({
  menuItems,
  menuLabel = 'Menu',
  rootUrl = '/',
  title,
  type = 'basic',
}: TrussBasicHeaderProperties): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = (): void => {
    setExpanded(expanded_ => {
      return !expanded_;
    });
  };

  return (
    <Header basic={type === 'basic'} extended={type === 'extended'}>
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <Title>
            <NextLink linkProperties={{ href: rootUrl }}>{title}</NextLink>
          </Title>
          <NavMenuButton label={menuLabel} onClick={toggleExpanded} />
        </div>
        <PrimaryNav
          items={menuItems}
          mobileExpanded={expanded}
          onToggleMobileNav={toggleExpanded}
        />
      </div>
    </Header>
  );
}
