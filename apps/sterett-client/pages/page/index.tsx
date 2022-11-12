import { QueryClient } from '@tanstack/react-query';
import type { InferGetStaticPropsType } from 'next';

import { PageLayout } from '../../feature/common/page-layout/page-layout';
import { PageIndex } from '../../feature/page/page-index';
import { REVALIDATE } from '../../util/constants';
import type { GetAllPagesReturn } from '../../util/groq/page-groq';
import { getAllPages, getAllPagesKey } from '../../util/groq/page-groq';
import type { GetPropertiesData } from '../../util/types/next-types';

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <PageLayout>
      <PageIndex pageData={data} />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<
  GetPropertiesData<GetAllPagesReturn>
> {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getAllPagesKey(), getAllPages);

  const pages = await getAllPages();

  return {
    props: {
      data: pages,
    },
    revalidate: REVALIDATE,
  };
}
