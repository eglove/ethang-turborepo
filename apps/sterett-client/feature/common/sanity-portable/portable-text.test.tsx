import { type TypedObject } from '@portabletext/types';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { type ImageAsset } from '../../../util/groq/page-groq';
import { PortableTextWrapper } from './portable-text';

describe('Portable Text', () => {
  afterEach(() => {
    cleanup();
  });

  test('it should correctly render image when provided with valid image asset', () => {
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
        url: 'https://example.com/',
      },
    };

    render(<PortableTextWrapper value={value} />);

    const element = screen.getByRole<HTMLImageElement>('img');
    expect(element).toBeTruthy();
    expect(element?.alt).toBe('text');
  });

  test('it should not render image when provided with invalid image asset', () => {
    const value: TypedObject = {
      _key: '123',
      _type: 'image',
    };

    render(<PortableTextWrapper value={value} />);
    expect(screen.queryByRole('img')).toBeFalsy();
  });
});
