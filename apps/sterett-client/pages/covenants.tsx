import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import {
  getCovenants,
  getCovenantsKey,
} from '../feature/covenants/covenants-groq';
import { CovenantsLayout } from '../feature/covenants/covenants-layout';

export default function Covenants(): JSX.Element {
  return (
    <PageLayout>
      <CovenantsLayout />
    </PageLayout>
  );
}

export async function getServerSideProps(): Promise<{
  props: { dehydratedState: DehydratedState };
}> {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getCovenantsKey(), getCovenants);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
