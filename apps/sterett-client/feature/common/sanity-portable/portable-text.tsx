import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';

import type { ImageAsset } from '../../../util/groq/page-groq';
import { SanityPortableImage } from './sanity-portable-image';

export const portableTextComponents = {
  types: {
    image(properties: {
      value?: { altText?: string; asset: ImageAsset };
    }): JSX.Element | null {
      if (properties.value?.asset !== undefined) {
        return (
          <SanityPortableImage
            altText={properties?.value?.altText ?? ''}
            image={properties.value.asset}
          />
        );
      }

      return null;
    },
  },
};

export function PortableTextWrapper({
  value,
}: {
  value: TypedObject;
}): JSX.Element {
  return <PortableText components={portableTextComponents} value={value} />;
}
