import { shuffleArray } from 'util-typescript';

import type { ImageAsset } from '../../util/groq/page-groq';
import {
  NO_DRAFTS,
  sterettSanityClient,
} from '../../util/groq/sterett-sanity-client';

export type GetGalleryImagesReturn = Array<{
  _id: string;
  description: string;
  image: {
    asset: ImageAsset;
  };
}>;

export const getGalleryImagesKey = (): string[] => {
  return ['getGalleryImages'];
};

export const getGalleryImages = async (): Promise<GetGalleryImagesReturn> => {
  const imagesQuery = `*[_type == "galleryImage" && ${NO_DRAFTS}]{_id, description, image{asset->{_id, url, path, assetId, extension, metadata{dimensions{height, width}}}}}`;

  const images = await sterettSanityClient.fetch<GetGalleryImagesReturn>(
    imagesQuery
  );

  return shuffleArray(images);
};
