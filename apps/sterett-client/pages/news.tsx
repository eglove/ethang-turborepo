import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import {
  getNewsAndEvents,
  getNewsAndEventsKey,
} from '../feature/news/news-groq';
import { NewsLayout } from '../feature/news/news-layout';

export default function News(): JSX.Element {
  return (
    <PageLayout>
      <NewsLayout />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<{
  props: { dehydratedState: DehydratedState };
  revalidate: number;
}> {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getNewsAndEventsKey(), getNewsAndEvents);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}
