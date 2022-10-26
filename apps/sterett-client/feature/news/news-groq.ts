import type { TypedObject } from '@portabletext/types';

import {
  NO_DRAFTS,
  sterettSanityClient,
} from '../../util/groq/sterett-sanity-client';

export type CalendarEvent = {
  _id: string;
  description: TypedObject;
  endsAt: string;
  startsAt: string;
  title: string;
};

export type NewsUpdate = {
  _id: string;
  date: string;
  description: TypedObject;
  title: string;
};

export type EventsNewsReturn = {
  events: CalendarEvent[];
  updates: NewsUpdate[];
};

export type SortedNewsAndEvents = Array<CalendarEvent | NewsUpdate>;

export const getNewsAndEventsKey = (): string[] => {
  return ['getNewsAndEvents'];
};

export const getNewsAndEvents = async (): Promise<SortedNewsAndEvents> => {
  const eventQuery = `*[_type == "calendarEvent" && ${NO_DRAFTS}] | order(startsAt desc){_id, title, startsAt, endsAt, description}`;
  const updateQuery = `*[_type == "newsUpdate" && ${NO_DRAFTS}] | order(date desc){_id, title, date, description}`;

  const [events, updates] = await Promise.all([
    sterettSanityClient.fetch<CalendarEvent[]>(eventQuery),
    sterettSanityClient.fetch<NewsUpdate[]>(updateQuery),
  ]);
  return sortNewsAndEvents({ events, updates });
};

export const sortNewsAndEvents = (
  eventsNews: EventsNewsReturn
): SortedNewsAndEvents => {
  const sorted: SortedNewsAndEvents = [];
  let calendarIndex = 0;
  let newsIndex = 0;

  while (
    calendarIndex <= eventsNews.events.length &&
    newsIndex <= eventsNews.updates.length
  ) {
    const news = eventsNews.updates[newsIndex];
    const calendar = eventsNews.events[calendarIndex];
    const newsUpdatedAt = new Date(news?.date ?? 0);
    const calendarStartsAt = new Date(calendar?.startsAt ?? 0);

    if (
      (typeof news !== 'undefined' &&
        typeof calendar !== 'undefined' &&
        calendarStartsAt > newsUpdatedAt) ||
      (typeof calendar !== 'undefined' && typeof news === 'undefined')
    ) {
      sorted.push(calendar);
      calendarIndex += 1;
    } else if (
      (typeof calendar !== 'undefined' &&
        typeof news !== 'undefined' &&
        calendarStartsAt < newsUpdatedAt) ||
      (typeof calendar === 'undefined' && typeof news !== 'undefined')
    ) {
      sorted.push(news);
      newsIndex += 1;
    } else {
      calendarIndex += 1;
      newsIndex += 1;
    }
  }

  return sorted;
};
