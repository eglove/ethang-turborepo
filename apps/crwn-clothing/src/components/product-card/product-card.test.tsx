import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';

import { ProductCard } from './product-card';

describe('ProductCard', () => {
  const data = {
    id: faker.datatype.number(),
    imageUrl: faker.internet.url(),
    name: faker.datatype.string(),
    price: faker.datatype.number(),
  };

  it('should render product card correctly', () => {
    render(<ProductCard product={data} />);

    const nameElement = screen.getByText(data.name);
    const priceElement = screen.getByText(data.price);
    expect(nameElement).toBeDefined();
    expect(priceElement).toBeDefined();

    const image = screen.getByRole('img', {
      name: data.name,
    });
    expect(image).toBeDefined();

    const button = screen.getByRole('button', {
      name: 'Add to Cart',
    });
    expect(button).toBeDefined();
  });
});
