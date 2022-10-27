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
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <Image
        alt={altText}
        height={imageProperties.height}
        placeholder="blur"
        src={imageProperties.src}
        width={imageProperties.width}
        blurDataURL={`${
          imageProperties.src
        }?w=${64}&blur=50&quality=30&fit=clip&auto=format`}
        style={{
          height: 'auto',
          objectFit: 'contain',
          position: 'relative',
        }}
      />
    </div>
  );
}
