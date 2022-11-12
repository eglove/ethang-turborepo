import type { InferGetStaticPropsType } from 'next';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import type { SortedNewsAndEvents } from '../feature/news/news-groq';
import { getNewsAndEvents } from '../feature/news/news-groq';
import { NewsLayout } from '../feature/news/news-layout';
import { REVALIDATE } from '../util/constants';
import type { GetPropertiesData } from '../util/types/next-types';

export default function News({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <PageLayout>
      <NewsLayout newsAndEvents={data} />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<
  GetPropertiesData<SortedNewsAndEvents>
> {
  const data = await getNewsAndEvents();

  return {
    props: {
      data,
    },
    revalidate: REVALIDATE,
  };
}
