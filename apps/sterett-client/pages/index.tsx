import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import { HomeLayout } from '../feature/home/home-layout';
import { getPage, getPageKey } from '../util/groq/page-groq';

export function Index(): JSX.Element {
  return (
    <PageLayout>
      <HomeLayout />
    </PageLayout>
  );
}

export async function getServerSideProps(): Promise<{
  props: { dehydratedState: DehydratedState };
}> {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getPageKey('home'), async () => {
    return getPage('home');
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Index;
