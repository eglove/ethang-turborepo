import { QueryClient } from '@tanstack/react-query';
import type { InferGetStaticPropsType } from 'next';

import { PageLayout } from '../../feature/common/page-layout/page-layout';
import { ShowPage } from '../../feature/page/show-page';
import { REVALIDATE } from '../../util/constants';
import type { GetPageReturn } from '../../util/groq/page-groq';
import { getPage, getPageKey, getPageSlugs } from '../../util/groq/page-groq';
import type { GetPropertiesData } from '../../util/types/next-types';

export default function SlugPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <PageLayout>
      <ShowPage pageData={data} />
    </PageLayout>
  );
}

export async function getStaticPaths(): Promise<{
  fallback: boolean;
  paths: string[];
}> {
  const data = await getPageSlugs();
  const paths = data.map(datum => {
    return datum.slug.current;
  });

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({
  query,
}: {
  query: { slug: string };
}): Promise<GetPropertiesData<GetPageReturn>> {
  const queryClient = new QueryClient();

  const { slug } = query;

  await queryClient.prefetchQuery(getPageKey(slug), async () => {
    return getPage(slug);
  });

  const page = await getPage(slug);

  return {
    props: {
      data: page,
    },
    revalidate: REVALIDATE,
  };
}
