import { Icon } from '@trussworks/react-uswds';
import { humanReadableLocalDateTime } from 'util-typescript';

import { Container } from '../common/container/container';
import { PortableTextWrapper } from '../common/portable-text';
import styles from './news.module.css';
import type {
  CalendarEvent,
  NewsUpdate,
  SortedNewsAndEvents,
} from './news-groq';

type NewsLayoutProperties = {
  newsAndEvents: SortedNewsAndEvents;
};

export function NewsLayout({
  newsAndEvents,
}: NewsLayoutProperties): JSX.Element {
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
