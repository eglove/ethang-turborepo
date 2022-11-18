import SanityClient from '@sanity/client';
import { getConst } from 'node-environment';

export const ETHANG_GROQ_API_VERSION = new Date().toISOString().split('T')[0];

export const NO_DRAFTS = "!(_id in path('drafts.**'))";

export const SANITY_IMAGE = `image {
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

export const ethangSanityClient = SanityClient({
  apiVersion: ETHANG_GROQ_API_VERSION,
  dataset: getConst('ETHANG_SANITY_DATASET'),
  projectId: getConst('ETHANG_SANITY_PROJECT_ID'),
  token: getConst('ETHANG_SANITY_VIEWER_TOKEN'),
  useCdn: typeof document !== 'undefined',
});
