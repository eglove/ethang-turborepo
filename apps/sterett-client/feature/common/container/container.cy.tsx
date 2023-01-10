import { Container } from './container';
import styles from './container.module.css';

describe('<Container />', () => {
  it('should have the default class', () => {
    cy.mount(<Container>Test</Container>);

    cy.findByText('Test').should('have.class', styles.Container);
  });

  it('should have the correct class when provided as a prop', () => {
    cy.mount(
      <Container containerProperties={{ className: 'customClass' }}>
        Test
      </Container>,
    );

    cy.findByText('Test').should(
      'have.class',
      `customClass ${styles.Container}`,
    );
  });

  it('should render the correct children', () => {
    const children = 'Test';
    cy.mount(<Container>Test</Container>);

    cy.findByText('Test').parent().should('contain.text', children);
  });
});
