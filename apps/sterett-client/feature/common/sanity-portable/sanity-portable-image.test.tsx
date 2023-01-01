import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { type ImageAsset } from '../../../util/groq/page-groq';
import { SanityPortableImage } from './sanity-portable-image';

describe('Sanity Portable Image', () => {
  afterEach(() => {
    cleanup();
  });

  it('should correctly render image when provided valid asset', () => {
    const image: ImageAsset = {
      metadata: {
        dimensions: {
          height: 100,
          width: 100,
        },
      },
      url: 'http://example.com/',
    };

    render(<SanityPortableImage altText="Test" image={image} />);
    const imageElement = screen.getByRole<HTMLImageElement>('img');
    expect(imageElement).toBeTruthy();
    expect(imageElement?.alt).toBe('Test');
    expect(imageElement?.height).toBe(100);
    expect(imageElement?.width).toBe(100);
  });
});
