import {
  NO_DRAFTS,
  sterettSanityClient,
} from '../../util/groq/sterett-sanity-client';

export type GetTrusteesReturn = Array<{
  _id: string;
  duties: string;
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
  name: string;
  phoneNumber: string;
}>;

export const getTrusteesKey = (): string[] => {
  return ['getTrustees'];
};

export const getTrustees = async (): Promise<GetTrusteesReturn> => {
  const trusteesQuery = `*[_type == "trustee" && ${NO_DRAFTS}] | order(order asc) {_id, duties, name, phoneNumber, image{asset->{url, metadata{dimensions{height, width}}}}}`;

  return sterettSanityClient.fetch(trusteesQuery);
};
