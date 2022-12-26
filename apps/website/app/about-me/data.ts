import type { TypedObject } from '@portabletext/types';
import { cache } from 'react';

import { ethangSanityClient, NO_DRAFTS, SANITY_IMAGE } from '../../util/sanity';

type AboutMeReturn = {
  content: TypedObject[];
  title: string;
};

export const getAboutMePage = cache(async (): Promise<AboutMeReturn> => {
  const where = `*[_type == "page" && slug.current == "about-me" && ${NO_DRAFTS}]`;
  const select = `{
    _id,
    _type,
    title,
    content[] {
      _key,
      _type,
      children,
      markDefs,
      style,
      image-> {
        description,
        ${SANITY_IMAGE}
      },
      id,
      title,
    }
  }`;
  const query = `${where} ${select}`;

  const aboutMe: AboutMeReturn[] = await ethangSanityClient.fetch(query);

  return aboutMe[0];
});
