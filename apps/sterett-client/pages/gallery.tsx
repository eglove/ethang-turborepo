import type { InferGetServerSidePropsType } from 'next';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import type { GetGalleryImagesReturn } from '../feature/gallery/gallery-groq';
import { getGalleryImages } from '../feature/gallery/gallery-groq';
import { GalleryLayout } from '../feature/gallery/gallery-layout';

export default function Gallery({
  images,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <PageLayout>
      <GalleryLayout images={images} />
    </PageLayout>
  );
}

export async function getServerSideProps(): Promise<{
  props: { images: GetGalleryImagesReturn };
}> {
  const images = await getGalleryImages();

  return {
    props: {
      images,
    },
  };
}
