import {
  NO_DRAFTS,
  sterettSanityClient,
} from '../../util/groq/sterett-sanity-client';

export type GetMeetingMinutesReturn = Array<{
  _id: string;
  file: {
    asset: {
      url: string;
    };
  };
  title: string;
}>;

export const getMeetingMinutesKey = (): string[] => {
  return ['getMeetingMinutes'];
};

export const getMeetingMinutes = async (): Promise<GetMeetingMinutesReturn> => {
  const covenantsQuery = `*[_type == "documentUpload" && category == "Meeting Minute" && ${NO_DRAFTS}] | order(date desc){_id, title, file{asset->{url}}}`;

  return sterettSanityClient.fetch(covenantsQuery);
};
