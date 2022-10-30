import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import { getTrustees, getTrusteesKey } from '../feature/trustees/trustees-groq';
import { TrusteesLayout } from '../feature/trustees/trustees-layout';

export default function Trustees(): JSX.Element {
  return (
    <PageLayout>
      <TrusteesLayout />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<{
  props: { dehydratedState: DehydratedState };
  revalidate: number;
}> {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getTrusteesKey(), getTrustees);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}
