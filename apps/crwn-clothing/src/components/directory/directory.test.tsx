import { render, screen } from '@testing-library/react';
import React from 'react';

import { categories } from '../../data/categories';
import { Directory } from './directory';

describe('Directory', () => {
  it('should have all five categories on the homepage with a shop now link', () => {
    render(<Directory />);

    for (const category of categories) {
      const linkElement = screen.getByRole('heading', {
        name: category.title,
      });

      expect(linkElement).toBeDefined();
    }

    const shopNows = screen.getAllByText('Shop Now');
    expect(shopNows.length).toBe(categories.length);
  });
});
