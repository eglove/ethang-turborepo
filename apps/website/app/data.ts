import { cache } from 'react';
import { shuffleArray } from 'util-typescript';

import { ethangSanityClient, NO_DRAFTS, SANITY_IMAGE } from '../util/sanity';

export type GetHomeImagesReturn = Array<{
  _id: string;
  description: string;
  image: {
    asset: {
      _id: string;
      metadata: {
        dimensions: {
          height: number;
          width: number;
        };
      };
      url: string;
    };
  };
}>;

export const getHomeImages = cache(async (): Promise<GetHomeImagesReturn> => {
  const where = `*[_type == "imageUpload" && category == "Home Image" && ${NO_DRAFTS}]`;
  const select = `{
    _id,
    description,
    ${SANITY_IMAGE}
  }`;
  const homeImageQuery = `${where} ${select}`;

  return shuffleArray(
    await ethangSanityClient.fetch<GetHomeImagesReturn>(homeImageQuery)
  );
});
