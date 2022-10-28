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
  heightOverride?: number;
  image: SanityNextImageType;
  widthOverride?: number;
};

export function SanityNextImage({
  containerProperties,
  image,
  altText,
  widthOverride,
  heightOverride,
}: SanityImageProperties): JSX.Element {
  const blurWidth =
    image.asset.metadata.dimensions.width <= 64
      ? image.asset.metadata.dimensions.width / 2
      : 64;

  return (
    <div
      {...containerProperties}
      style={{
        display: 'grid',
        height: '100%',
        placeItems: 'center',
        width: '100%',
        ...containerProperties?.style,
      }}
    >
      <Image
        alt={altText}
        blurDataURL={`${image.asset.url}?w=${blurWidth}&blur=50&quality=30&fit=clip&auto=format`}
        height={heightOverride ?? image.asset.metadata.dimensions.height}
        placeholder="blur"
        src={`${image.asset.url}?auto=format`}
        style={{ height: 'auto', objectFit: 'contain', position: 'relative' }}
        width={widthOverride ?? image.asset.metadata.dimensions.width}
      />
    </div>
  );
}
