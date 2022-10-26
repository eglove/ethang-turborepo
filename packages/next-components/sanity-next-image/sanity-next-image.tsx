import Image from 'next/image';
import type { HTMLAttributes } from 'react';

type SanityNextImageType = {
  asset: {
    metadata: {
      dimensions: {
        height: number;
        width: number;
      };
    };
    url: string;
  };
};

type SanityImageProperties = {
  altText: string;
  containerProperties?: HTMLAttributes<HTMLDivElement>;
  image: SanityNextImageType;
};

export function SanityNextImage({
  containerProperties,
  image,
  altText,
}: SanityImageProperties): JSX.Element {
  const blurWidth =
    image.asset.metadata.dimensions.width <= 64
      ? image.asset.metadata.dimensions.width / 2
      : 64;

  return (
    <div
      {...containerProperties}
      style={{
        height: '100%',
        position: 'relative',
        width: '100%',
        ...containerProperties?.style,
      }}
    >
      <Image
        fill
        alt={altText}
        blurDataURL={`${image.asset.url}?w=${blurWidth}&blur=50&quality=30&fit=clip&auto=format`}
        placeholder="blur"
        src={`${image.asset.url}?auto=format`}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
