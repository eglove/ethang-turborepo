import { faker } from '@faker-js/faker';

import styles from './gallery.module.css';
import { type GetGalleryImagesReturn } from './gallery-groq';
import { GalleryLayout } from './gallery-layout';

describe('Gallery Layout', () => {
  const images: GetGalleryImagesReturn = [];

  beforeEach(() => {
    for (let index = 0; index < 12; index++) {
      images.push({
        _id: faker.datatype.string(3),
        description: faker.lorem.text(),
        image: {
          asset: {
            metadata: {
              dimensions: {
                height: faker.datatype.number(),
                width: faker.datatype.number(),
              },
            },
            url: 'https://cdn.sanity.io/example.png',
          },
        },
      });
    }
  });

  it('should render correctly', () => {
    cy.mount(<GalleryLayout images={images} />);

    cy.findAllByRole('img').should('have.length', images.length);
  });

  it('should render with the correct number of columns based on breakpoint', () => {
    cy.mount(<GalleryLayout images={images} />);

    cy.viewport(1024, 720);
    cy.get(`.${styles.Masonry}`).children().should('have.length', 3);

    cy.viewport(1440, 720);
    cy.get(`.${styles.Masonry}`).children().should('have.length', 4);

    cy.viewport(425, 720);
    cy.get(`.${styles.Masonry}`).children().should('have.length', 1);

    cy.viewport(768, 720);
    cy.get(`.${styles.Masonry}`).children().should('have.length', 2);
  });
});
