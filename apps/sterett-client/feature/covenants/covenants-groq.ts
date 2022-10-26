import {
  NO_DRAFTS,
  sterettSanityClient,
} from '../../util/groq/sterett-sanity-client';

export type GetCovenantsReturn = Array<{
  _id: string;
  file: {
    asset: {
      url: string;
    };
  };
  title: string;
}>;

export const getCovenantsKey = (): string[] => {
  return ['getCovenants'];
};

export const getCovenants = async (): Promise<GetCovenantsReturn> => {
  const covenantsQuery = `*[_type == "documentUpload" && category == "Covenant" && ${NO_DRAFTS}] | order(date desc){_id, title, file{asset->{url}}}`;

  return sterettSanityClient.fetch(covenantsQuery);
};
