import Image from 'next/image';

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
  heightOverride?: number;
  image: SanityNextImageType;
  widthOverride?: number;
};

export function SanityNextImage({
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
    <Image
      alt={altText}
      blurDataURL={`${image.asset.url}?w=${blurWidth}&blur=50&quality=30&fit=clip&auto=format`}
      height={heightOverride ?? image.asset.metadata.dimensions.height}
      itemProp="image"
      placeholder="blur"
      src={`${image.asset.url}?auto=format`}
      style={{ height: 'auto', objectFit: 'contain', position: 'relative' }}
      width={widthOverride ?? image.asset.metadata.dimensions.width}
    />
  );
}
