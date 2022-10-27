import type { SanityAsset } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
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
        margin: 'auto',
        placeItems: 'center',
        width: '80%',
      }}
    >
      <Image
        alt={altText}
        height={imageProperties.height}
        src={imageProperties.src}
        width={imageProperties.width}
      />
    </div>
  );
}
