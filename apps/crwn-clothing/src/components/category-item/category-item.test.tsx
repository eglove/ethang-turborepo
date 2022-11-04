import { render, screen } from '@testing-library/react';
import React from 'react';

import { categories } from '../../data/categories';
import { CategoryItem } from './category-item';

describe('Category Item', () => {
  it('should have title and shop now', () => {
    const category = categories[0];
    render(<CategoryItem category={category} />);

    const linkElement = screen.getByRole('heading', {
      name: category.title,
    });

    expect(linkElement).toBeDefined();

    const shopNows = screen.getAllByText('Shop Now');
    expect(shopNows.length).toBe(1);
  });
});
