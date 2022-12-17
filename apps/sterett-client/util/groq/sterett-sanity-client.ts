import SanityClient from '@sanity/client';

export const STERETT_GROQ_API_VERSION = new Date().toISOString().split('T')[0];

export const NO_DRAFTS = "!(_id in path('drafts.**'))";

export const sterettSanityClient = SanityClient({
  apiVersion: STERETT_GROQ_API_VERSION,
  dataset: process.env['NEXT_PUBLIC_STERETT_SANITY_DATASET'],
  ignoreBrowserTokenWarning: true,
  projectId: process.env['NEXT_PUBLIC_STERETT_SANITY_PROJECT_ID'],
  token: process.env['NEXT_PUBLIC_STERETT_SANITY_RO_TOKEN'],
  useCdn: typeof document !== 'undefined',
});
