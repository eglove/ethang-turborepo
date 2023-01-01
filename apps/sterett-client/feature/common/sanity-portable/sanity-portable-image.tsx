import Image from 'next/image';

import type { ImageAsset } from '../../../util/groq/page-groq';

type SanityPortableImageProperties = {
  altText: string;
  image: ImageAsset;
};

export function SanityPortableImage({
  altText,
  image,
}: SanityPortableImageProperties): JSX.Element {
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <Image
        alt={altText}
        height={image.metadata.dimensions.height}
        placeholder="blur"
        src={image.url}
        width={image.metadata.dimensions.width}
        blurDataURL={`${
          image.url
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
