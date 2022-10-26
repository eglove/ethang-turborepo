import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { PageLayout } from '../../feature/common/page-layout/page-layout';
import { ShowPage } from '../../feature/page/show-page';
import { getPage, getPageKey } from '../../util/groq/page-groq';

export default function SlugPage(): JSX.Element {
  return (
    <PageLayout>
      <ShowPage />
    </PageLayout>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: { slug: string };
}): Promise<{
  props: { dehydratedState: DehydratedState };
}> {
  const queryClient = new QueryClient();

  const { slug } = query;

  await queryClient.prefetchQuery(getPageKey(slug), async () => {
    return getPage(slug);
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
