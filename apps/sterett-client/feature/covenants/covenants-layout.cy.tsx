import React from 'react';

import { CovenantsLayout } from './covenants-layout';

const covenants = [
  {
    _id: '123',
    file: {
      asset: {
        url: 'http://example.com/',
      },
    },
    title: 'Covenant',
  },
  {
    _id: '124',
    file: {
      asset: {
        url: 'http://example.com#2',
      },
    },
    title: 'Covenant 2',
  },
];

describe('<CovenantsLayout />', () => {
  it('renders the correct href and text content for each TrussNextLink', () => {
    cy.mount(<CovenantsLayout covenants={covenants} />);

    cy.findByRole('link', {
      name: 'Covenant',
    })
      .should('be.visible')
      .and('have.attr', 'href', 'http://example.com/');

    cy.findByRole('link', {
      name: 'Covenant 2',
    })
      .should('be.visible')
      .and('have.attr', 'href', 'http://example.com#2');
  });
});
