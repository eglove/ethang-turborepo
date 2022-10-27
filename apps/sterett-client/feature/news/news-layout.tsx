import { useQuery } from '@tanstack/react-query';
import { Icon } from '@trussworks/react-uswds';
import { humanReadableLocalDateTime } from 'util-typescript';

import { Container } from '../common/container/container';
import { NoContent } from '../common/no-content';
import { PortableTextWrapper } from '../common/portable-text';
import styles from './news.module.css';
import type {
  CalendarEvent,
  NewsUpdate,
  SortedNewsAndEvents,
} from './news-groq';
import { getNewsAndEvents, getNewsAndEventsKey } from './news-groq';

export function NewsLayout(): JSX.Element {
  const { data: newsAndEvents } = useQuery<SortedNewsAndEvents>(
    [getNewsAndEventsKey],
    getNewsAndEvents
  );

  if (newsAndEvents?.length === 0) {
    return <NoContent />;
  }

  return (
    <Container>
      {newsAndEvents?.map(datum => {
        if (typeof (datum as NewsUpdate).date !== 'undefined') {
          const newsUpdate = datum as NewsUpdate;

          return (
            <div className={styles.NewsContainer} key={newsUpdate._id}>
              <strong>{new Date(newsUpdate.date).toDateString()}</strong>
              <br />
              <span>{newsUpdate.title}</span>
              <PortableTextWrapper value={newsUpdate.description} />
            </div>
          );
        }

        const event = datum as CalendarEvent;

        return (
          <div className={styles.EventContainer} key={event._id}>
            <strong>
              {/* @ts-expect-error this is a svg */}
              <Icon.CalendarToday />
              <span>{humanReadableLocalDateTime(event.startsAt)}</span>
              <span>
                {event.endsAt.toString() === event.startsAt.toString()
                  ? ''
                  : ` - ${humanReadableLocalDateTime(event.endsAt)}`}
              </span>
            </strong>
            <br />
            <div>{event.title}</div>
            <PortableTextWrapper value={event.description} />
          </div>
        );
      })}
    </Container>
  );
}
