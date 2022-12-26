import type { TypedObject } from '@portabletext/types';
import { cache } from 'react';

import {
  ethangSanityClient,
  NO_DRAFTS,
  SANITY_IMAGE,
} from '../../../util/sanity';

export type GetBlogReturn = {
  _id: string;
  authors: Array<{
    name: string;
  }>;
  content: TypedObject[];
  description: string;
  featuredImage: {
    description: string;
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
  publishedAt: string;
  reviews?: {
    instructors: Array<{
      name: string;
    }>;
    rating: string;
    title: string;
  };
  slug: {
    current: string;
  };
  title: string;
  updatedAt: string;
};

type GetBlogData = GetBlogReturn[];

export const getBlog = cache(async (slug: string): Promise<GetBlogReturn> => {
  const where = `*[_type == "blog" && slug.current == "${slug}" && ${NO_DRAFTS}]`;
  const select = `{
    _id,
    title,
    publishedAt,
    updatedAt,
  description,
    content[] {
      ...,
      image-> {
        description,
        ${SANITY_IMAGE}
      },
    },
    slug {
      current,
    },
    authors[]-> {
      name,
    },
    reviews-> {
      title,
      rating,
      instructors[]-> {
        name
      },
    },
    featuredImage-> {
      description,
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
    },
  }`;

  const blog = await ethangSanityClient.fetch<GetBlogData>(
    `${where} ${select}`
  );

  return blog[0];
});
