import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Navigation } from './navigation';

describe('Navigation', () => {
  it('should render links for navigation', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const links = ['Shop', 'Sign In'];

    for (const link of links) {
      const element = screen.getByRole('link', {
        name: link,
      });
      expect(element).toBeDefined();
    }
  });
});
