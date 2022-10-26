import SanityClient from '@sanity/client';
import { getConst } from 'node-environment';

export const STERETT_GROQ_API_VERSION = '2022-09-13';

export const NO_DRAFTS = "!(_id in path('drafts.**'))";

export const sterettSanityClient = SanityClient({
  apiVersion: STERETT_GROQ_API_VERSION,
  dataset: getConst('NEXT_PUBLIC_STERETT_SANITY_DATASET'),
  ignoreBrowserTokenWarning: true,
  projectId: getConst('NEXT_PUBLIC_STERETT_SANITY_PROJECT_ID'),
  token: getConst('NEXT_PUBLIC_STERETT_SANITY_RO_TOKEN'),
  useCdn: true,
});
