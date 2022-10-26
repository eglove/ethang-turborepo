import type { TypedObject } from '@portabletext/types';

import {
  NO_DRAFTS,
  sterettSanityClient,
} from '../../util/groq/sterett-sanity-client';

export type GetCalendarEventsReturn = Array<{
  _id: string;
  description: TypedObject;
  endsAt: string;
  startsAt: string;
  title: string;
}>;

export const getCalendarEventsKey = (from: Date, to: Date): string[] => {
  return ['getCalendarEvents', from.toISOString(), to.toISOString()];
};

export const getCalendarEvents = async (
  from: Date,
  to: Date
): Promise<GetCalendarEventsReturn> => {
  const eventQuery = `*[_type == "calendarEvent" && startsAt >= "${from.toISOString()}" && endsAt <= "${to.toISOString()}" && ${NO_DRAFTS}]{_id, title, startsAt, endsAt, description}`;

  return sterettSanityClient.fetch<GetCalendarEventsReturn>(eventQuery);
};
