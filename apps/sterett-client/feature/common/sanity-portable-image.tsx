import type { SanityAsset } from '@sanity/image-url/lib/types/types';
import { useNextSanityImage } from 'next-sanity-image';

import { sterettSanityClient } from '../../util/groq/sterett-sanity-client';

type SanityPortableImageProperties = {
  altText: string;
  image: SanityAsset;
};

export function SanityPortableImage({
  altText,
  image,
}: SanityPortableImageProperties): JSX.Element {
  const imageProperties = useNextSanityImage(sterettSanityClient, image);

  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div style={{ maxWidth: '500px' }}>
        <img
          alt={altText}
          height="auto"
          src={imageProperties.src}
          width={imageProperties.width}
        />
      </div>
    </div>
  );
}
