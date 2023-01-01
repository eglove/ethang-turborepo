import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PageLayout } from './page-layout';

describe('Page Layout', () => {
  it('should have the correct children', () => {
    render(
      <PageLayout>
        <div>Test</div>
      </PageLayout>,
    );

    const child = screen.getByText('Test');
    expect(child.textContent).toEqual('Test');
  });

  it('should have the correct navigation items', () => {
    render(
      <PageLayout>
        <div>Test</div>
      </PageLayout>,
    );

    const navigationLinks = screen.getAllByRole('link');
    expect(navigationLinks[0].textContent).toBe(
      'Sterett Creek Village Trustee',
    );
    expect(navigationLinks[1].textContent).toBe('Home');
    expect(navigationLinks[2].textContent).toBe('News');
    expect(navigationLinks[3].textContent).toBe('Calendar');
    expect(navigationLinks[4].textContent).toBe('Covenants');
    expect(navigationLinks[5].textContent).toBe('Meeting Minutes');
    expect(navigationLinks[6].textContent).toBe('Pictures');
    expect(navigationLinks[7].textContent).toBe('Trustees');
    expect(navigationLinks[8].textContent).toBe('More');
  });
});
