import type { TypedObject } from '@portabletext/types';

import { NO_DRAFTS, sterettSanityClient } from './sterett-sanity-client';

export const getPageKey = (slug: string): string[] => {
  return ['getPage', slug];
};

export type GetPageReturn = {
  _id: string;
  content: TypedObject;
  title: string;
};

export const getPage = async (slug: string): Promise<GetPageReturn> => {
  const pageQuery = `*[_type == "page" && slug.current == $slug && ${NO_DRAFTS}]{_id, title, content}`;
  const pages = await sterettSanityClient.fetch<GetPageReturn[]>(pageQuery, {
    slug,
  });

  return pages[0];
};

// ---

export type GetAllPagesReturn = Array<{
  _id: string;
  slug: {
    current: string;
  };
  title: string;
}>;

export const getAllPagesKey = (): string[] => {
  return ['getAllPages'];
};

export const getAllPages = async (): Promise<GetAllPagesReturn> => {
  const slugQuery = `*[_type == "page" && slug.current != "home" && ${NO_DRAFTS}]{_id, title, slug{current}}`;

  return sterettSanityClient.fetch(slugQuery);
};
