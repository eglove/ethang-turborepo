import { PageLayout } from './page-layout';

describe('<PageLayout />', () => {
  it('should have the correct children', () => {
    cy.mount(
      <PageLayout>
        <div>Test</div>
      </PageLayout>,
    );

    cy.findByText('Test').should('exist');
  });

  it('should have the correct navigation items', () => {
    cy.mount(
      <PageLayout>
        <div>Test</div>
      </PageLayout>,
    );

    const links = [
      { href: '/', name: 'Home' },
      { href: '/news', name: 'News' },
      { href: '/calendar', name: 'Calendar' },
      { href: '/covenants', name: 'Covenants' },
      { href: '/meeting-minutes', name: 'Meeting Minutes' },
      { href: '/gallery', name: 'Pictures' },
      { href: '/trustees', name: 'Trustees' },
      { href: '/page', name: 'More' },
    ];

    cy.viewport('macbook-16');

    for (const link of links) {
      cy.findByRole('link', {
        name: link.name,
      }).should('have.attr', 'href', link.href);
    }
  });

  it('should show use a navigation menu when in mobile', () => {
    cy.mount(
      <PageLayout>
        <div>Test</div>
      </PageLayout>,
    );

    cy.viewport('samsung-s10');

    const menuButton = cy.get('[data-testid="navMenuButton"]');
    menuButton.should('exist');
    menuButton.click();

    cy.findByRole('link', {
      name: 'Home',
    }).should('exist');

    cy.get('[data-testid="navCloseButton"]').click();

    cy.findByRole('link', {
      name: 'Home',
    }).should('not.exist');
  });
});
