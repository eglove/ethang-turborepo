import Image from 'next/image';
import Masonry from 'react-masonry-css';

import { Container } from '../common/container/container';
import { NoContent } from '../common/no-content';
import styles from './gallery.module.css';
import type { GetGalleryImagesReturn } from './gallery-groq';

type GalleryLayoutProperties = {
  images: GetGalleryImagesReturn;
};

export function GalleryLayout({
  images,
}: GalleryLayoutProperties): JSX.Element {
  if (images?.length === 0) {
    return <NoContent />;
  }

  return (
    <Container>
      <Masonry
        className={styles.Masonry}
        breakpointCols={{
          1024: 3,
          1440: 4,
          425: 1,
          768: 2,
          default: 5,
        }}
      >
        {images?.map(image => {
          const blurWidth =
            image.image.asset.metadata.dimensions.width <= 64
              ? image.image.asset.metadata.dimensions.width / 2
              : 64;

          return (
            <div className={styles.MasonryColumn} key={image._id}>
              <Image
                alt={image.description}
                blurDataURL={`${image.image.asset.url}?w=${blurWidth}&blur=50&quality=30&fit=clip&auto=format`}
                height={image.image.asset.metadata.dimensions.height}
                placeholder="blur"
                src={image.image.asset.url}
                style={{ objectFit: 'contain' }}
                width={image.image.asset.metadata.dimensions.width}
              />
            </div>
          );
        })}
      </Masonry>
    </Container>
  );
}
