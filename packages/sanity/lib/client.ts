import SanityClient, { type ClientConfig } from '@sanity/client';

const defaultVersion = new Date().toISOString().split('T')[0];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sanityClient = ({
  apiVersion = defaultVersion,
  useCdn = typeof document !== 'undefined',
  ...rest
}: ClientConfig) => {
  return SanityClient({
    apiVersion,
    useCdn,
    ...rest,
  });
};

export const ethangSanityClient = sanityClient({
  dataset: 'production',
  projectId: 'ipn3uarr',
});

export const sterettSanityClient = sanityClient({
  dataset: 'production',
  ignoreBrowserTokenWarning: true,
  projectId: '540gjnt8',
});
