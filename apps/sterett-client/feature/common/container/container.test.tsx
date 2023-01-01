import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Container } from './container';
import styles from './container.module.css';

describe('Container', () => {
  afterEach(() => {
    cleanup();
  });

  it('should have default class', () => {
    render(<Container>Test</Container>);

    const containerElement = screen.getByText('Test');
    expect(containerElement.className.trim()).toBe(styles.Container);
  });

  it('should have the correct class when provided as a prop', () => {
    const containerProperties = { className: 'custom-class' };

    render(
      <Container containerProperties={containerProperties}>Test</Container>,
    );

    const containerElement = screen.getByText('Test');
    expect(containerElement.className.trim()).toBe(
      `custom-class ${styles.Container}`,
    );
  });

  it('should render the correct children', () => {
    const children = 'Test';
    render(<Container>{children}</Container>);

    const containerElement = screen.getByText('Test').parentElement;
    expect(containerElement?.textContent).toBe('Test');
  });
});
