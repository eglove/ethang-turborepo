import 'react-big-calendar/lib/css/react-big-calendar.css';

import type { TypedObject } from '@portabletext/types';
import { useQuery } from '@tanstack/react-query';
import type { ModalRef } from '@trussworks/react-uswds';
import {
  Modal,
  ModalFooter,
  ModalHeading,
  ModalToggleButton,
} from '@trussworks/react-uswds';
import { endOfWeek, format, getDay, parse, startOfWeek } from 'date-fns';
import { enUS } from 'date-fns/locale';
import type { RefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { View, ViewsProps } from 'react-big-calendar';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { dayStartEnd } from 'util-typescript';

import { Container } from '../common/container/container';
import { PortableTextWrapper } from '../common/sanity-portable/portable-text';
import { getCalendarEvents, getCalendarEventsKey } from './calendar-groq';

type RangeDate = Date[] | { end: Date; start: Date };

type CalendarEvent = {
  description: TypedObject;
  end: Date;
  start: Date;
  title: string;
};

const today = new Date();
const defaultViews: ViewsProps = ['month', 'week', 'day', 'agenda'];
const mobileViews: ViewsProps = ['month', 'week', 'day', 'agenda'];

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  getDay,
  locales,
  parse,
  startOfWeek,
});

export function CalendarLayout(): JSX.Element | null {
  const selectedEventReference = useRef() as RefObject<ModalRef>;
  const isMobileView =
    typeof window === 'undefined' ? false : innerWidth <= 768;

  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent>();
  const [views, setViews] = useState<ViewsProps>(
    isMobileView ? mobileViews : defaultViews,
  );
  const [view, setView] = useState<View>(isMobileView ? 'day' : 'week');
  const [from, setFrom] = useState<Date>(startOfWeek(today));
  const [to, setTo] = useState<Date>(endOfWeek(today));

  useQuery(
    getCalendarEventsKey(from, to),
    async () => {
      return getCalendarEvents(from, to);
    },
    {
      onSuccess(data) {
        setEvents(
          data.map(event => {
            return {
              description: event.description,
              end: new Date(event.endsAt),
              start: new Date(event.startsAt),
              title: event.title,
            };
          }),
        );
      },
    },
  );

  const handleRangeChange = useCallback((range: RangeDate): void => {
    if (Array.isArray(range)) {
      const endDate = range[range.length - 1];
      const startDate = range[0];

      if (endDate !== undefined) {
        setTo(dayStartEnd(endDate, 'end'));
      }

      if (startDate !== undefined) {
        setFrom(dayStartEnd(startDate, 'start'));
      }
    } else {
      setTo(dayStartEnd(range.end, 'end'));
      setFrom(dayStartEnd(range.start, 'start'));
    }
  }, []);

  const handleSelectEvent = useCallback((event: CalendarEvent): void => {
    setSelectedEvent(event);
    selectedEventReference.current?.toggleModal();
  }, []);

  const handleViewChange = useCallback(
    (newView: View = view): void => {
      if (innerWidth <= 768) {
        if (!(mobileViews as string[]).includes(newView)) {
          setView('day');
        }

        setViews(mobileViews);
      } else {
        setView(newView);
        setViews(defaultViews);
      }
    },
    [view],
  );

  useEffect(() => {
    let lastMove = 0;
    const onResize = (): void => {
      if (Date.now() - lastMove > 300) {
        lastMove = Date.now();
        handleViewChange();
      }
    };

    addEventListener('resize', onResize);

    return () => {
      removeEventListener('resize', onResize);
    };
  }, [handleViewChange]);

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Container>
      <Calendar
        selectable
        defaultView="week"
        endAccessor="end"
        events={events}
        localizer={localizer}
        startAccessor="start"
        view={view}
        views={views}
        style={{
          height: '100vh',
          width: '80vw',
        }}
        onRangeChange={handleRangeChange}
        onSelectEvent={handleSelectEvent}
        onView={setView}
      />
      <Modal id="selectedEvent" ref={selectedEventReference}>
        <ModalHeading>{selectedEvent?.title}</ModalHeading>
        <div className="usa-prose">
          <p>Starts: {selectedEvent?.start.toLocaleString()}</p>
          <p>Ends: {selectedEvent?.end.toLocaleString()}</p>
          {selectedEvent?.description && (
            <PortableTextWrapper value={selectedEvent?.description} />
          )}
        </div>
        <ModalFooter>
          <ModalToggleButton closer modalRef={selectedEventReference}>
            Go Back
          </ModalToggleButton>
        </ModalFooter>
      </Modal>
    </Container>
  );
}
