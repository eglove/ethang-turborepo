import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import { getCovenantsKey } from '../feature/covenants/covenants-groq';
import { getMeetingMinutes } from '../feature/meeting-minutes/meeting-minutes-groq';
import { MeetingMinutesLayout } from '../feature/meeting-minutes/meeting-minutes-layout';

export default function MeetingMinutes(): JSX.Element {
  return (
    <PageLayout>
      <MeetingMinutesLayout />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<{
  props: { dehydratedState: DehydratedState };
  revalidate: number;
}> {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getCovenantsKey(), getMeetingMinutes);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}
