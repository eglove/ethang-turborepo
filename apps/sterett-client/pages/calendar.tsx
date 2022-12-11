import { CalendarLayout } from '../feature/calendar/calendar-layout';
import { PageLayout } from '../feature/common/page-layout/page-layout';

export default function Calendar(): JSX.Element {
  return (
    <PageLayout>
      <CalendarLayout />
    </PageLayout>
  );
}
