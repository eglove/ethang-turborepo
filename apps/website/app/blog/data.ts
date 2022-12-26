import { cache } from 'react';

import { ethangSanityClient, NO_DRAFTS } from '../../util/sanity';

export type GetBlogsReturn = Array<{
  _id: string;
  authors: [
    {
      name: string;
    }
  ];
  featuredImage: {
    image: {
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
  };
  slug: {
    current: string;
  };
  title: string;
  updatedAt: string;
}>;

export const getBlogs = cache(async (): Promise<GetBlogsReturn> => {
  const where = `*[_type == "blog" && ${NO_DRAFTS}]`;
  const order = `order(updatedAt desc)`;
  const select = `{
    _id,
    title,
    updatedAt,
    slug {
      current,
    },
    authors[]-> {
      name,
    },
    featuredImage-> {
      image {
        asset-> {
          url,
          metadata {
          dimensions {
            height,
            width,
          },
        },
      },
    },
  }}`;

  const query = `${where} | ${order} ${select}`;

  return ethangSanityClient.fetch<GetBlogsReturn>(query);
});
