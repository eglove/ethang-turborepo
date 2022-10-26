import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { PageLayout } from '../../feature/common/page-layout/page-layout';
import { PageIndex } from '../../feature/page/page-index';
import { getAllPages, getAllPagesKey } from '../../util/groq/page-groq';

export default function Page(): JSX.Element {
  return (
    <PageLayout>
      <PageIndex />
    </PageLayout>
  );
}

export async function getServerSideProps(): Promise<{
  props: { dehydratedState: DehydratedState };
}> {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getAllPagesKey(), getAllPages);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
