import type { InferGetStaticPropsType } from 'next';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import type { GetGalleryImagesReturn } from '../feature/gallery/gallery-groq';
import { getGalleryImages } from '../feature/gallery/gallery-groq';
import { GalleryLayout } from '../feature/gallery/gallery-layout';
import { REVALIDATE } from '../util/constants';

export default function Gallery({
  images,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <PageLayout>
      <GalleryLayout images={images} />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<{
  props: { images: GetGalleryImagesReturn };
  revalidate: number;
}> {
  const images = await getGalleryImages();

  return {
    props: {
      images,
    },
    revalidate: REVALIDATE,
  };
}
