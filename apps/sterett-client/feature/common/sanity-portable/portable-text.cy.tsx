import { type TypedObject } from '@portabletext/types';

import { type ImageAsset } from '../../../util/groq/page-groq';
import { PortableTextWrapper } from './portable-text';

describe('<PortableText />', () => {
  it('it should correctly render image when provided with valid image asset', () => {
    const value: { altText: string; asset: ImageAsset } & TypedObject = {
      _key: '123',
      _type: 'image',
      altText: 'text',
      asset: {
        metadata: {
          dimensions: {
            height: 100,
            width: 100,
          },
        },
        url: 'https://cdn.sanity.io/image.png',
      },
    };

    cy.mount(<PortableTextWrapper value={value} />);

    cy.findByRole('img').should('exist').and('have.attr', 'alt', 'text');
  });

  it('it should not render image when provided with invalid image asset', () => {
    const value: TypedObject = {
      _key: '123',
      _type: 'image',
    };

    cy.mount(<PortableTextWrapper value={value} />);

    cy.findByRole('img').should('not.exist');
  });
});
