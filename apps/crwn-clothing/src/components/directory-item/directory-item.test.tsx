import { render, screen } from '@testing-library/react';
import React from 'react';

import { categories } from '../../data/categories';
import { DirectoryItem } from './directory-item';

describe('Category Item', () => {
  it('should have title and shop now', () => {
    const category = categories[0];
    render(<DirectoryItem category={category} />);

    const linkElement = screen.getByRole('heading', {
      name: category.title,
    });

    expect(linkElement).toBeDefined();

    const shopNows = screen.getAllByText('Shop Now');
    expect(shopNows.length).toBe(1);
  });
});
