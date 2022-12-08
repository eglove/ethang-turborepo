import { type SanityClient, type SlugValidationContext } from 'sanity';

import { ethangSanityClient } from './client';

export const GROQ_NO_DRAFTS = "!(_id in path('drafts.**'))";

export const GROQ_IMAGE = `image {
    asset-> {
      url,
      metadata {
        dimensions {
          height,
          width,
        },
      },
    },
  },`;

type SlugParameters = {
  draft: string;
  published: string;
  slug: string;
};

export function uniqueSlugQuery(
  slug: string,
  options: SlugValidationContext
): { parameters?: SlugParameters; query?: string } {
  const { document } = options;

  if (document === undefined) {
    return {
      parameters: undefined,
      query: undefined,
    };
  }

  const id: string = document._id.replace(/^drafts\./, '');
  const parameters = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  };

  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`;

  return { parameters, query };
}

export async function isSlugUnique(
  client: SanityClient,
  slug: string,
  options: SlugValidationContext
): Promise<boolean> {
  const { query, parameters } = uniqueSlugQuery(slug, options);

  if (query === undefined || parameters === undefined) {
    throw new Error('Are environment variables defined?');
  }

  return ethangSanityClient.fetch(query, parameters);
}
