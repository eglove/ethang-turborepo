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

    let element = screen.getByRole('link', {
      name: 'Shop',
    });
    expect(element).toBeDefined();

    element = screen.getByText('Shop');
    expect(element).toBeDefined();
  });
});
