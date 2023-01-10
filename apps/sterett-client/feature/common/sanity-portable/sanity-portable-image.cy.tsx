import { type ImageAsset } from '../../../util/groq/page-groq';
import { SanityPortableImage } from './sanity-portable-image';

describe('<SanityPortableImage />', () => {
  it('should correctly render image when provided valid asset', () => {
    const image: ImageAsset = {
      metadata: {
        dimensions: {
          height: 100,
          width: 100,
        },
      },
      url: 'https://cdn.sanity.io/image.png',
    };

    cy.mount(<SanityPortableImage altText="Test" image={image} />);

    cy.findByRole('img')
      .should('exist')
      .and('have.attr', 'alt', 'Test')
      .and('have.attr', 'height', 100)
      .and('have.attr', 'width', 100);
  });
});
