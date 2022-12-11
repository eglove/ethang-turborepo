import { QueryClient } from '@tanstack/react-query';
import type { InferGetStaticPropsType } from 'next';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import { getCovenantsKey } from '../feature/covenants/covenants-groq';
import type { GetMeetingMinutesReturn } from '../feature/meeting-minutes/meeting-minutes-groq';
import { getMeetingMinutes } from '../feature/meeting-minutes/meeting-minutes-groq';
import { MeetingMinutesLayout } from '../feature/meeting-minutes/meeting-minutes-layout';
import { REVALIDATE } from '../util/constants';
import type { GetPropertiesData } from '../util/types/next-types';

export default function MeetingMinutes({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <PageLayout>
      <MeetingMinutesLayout meetingMinutes={data} />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<
  GetPropertiesData<GetMeetingMinutesReturn>
> {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getCovenantsKey(), getMeetingMinutes);

  const meetingMinutes = await getMeetingMinutes();

  return {
    props: {
      data: meetingMinutes,
    },
    revalidate: REVALIDATE,
  };
}
