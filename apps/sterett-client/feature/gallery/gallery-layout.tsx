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
          return (
            <div className={styles.MasonryColumn} key={image._id}>
              <Image
                alt={image.description}
                height={image.image.asset.metadata.dimensions.height}
                src={image.image.asset.url}
                style={{ objectFit: 'cover' }}
                width={image.image.asset.metadata.dimensions.width}
              />
            </div>
          );
        })}
      </Masonry>
    </Container>
  );
}
