import type { SanityAsset } from '@sanity/image-url/lib/types/types';
import Image from 'next/future/image';
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
      <div
        style={{
          height: imageProperties.height,
          maxHeight: '500px',
          position: 'relative',
          width: imageProperties.width,
        }}
      >
        <Image
          fill
          alt={altText}
          src={imageProperties.src}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
