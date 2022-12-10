import type { InferGetStaticPropsType } from 'next';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import { HomeLayout } from '../feature/home/home-layout';
import { REVALIDATE } from '../util/constants';
import type { GetPageReturn } from '../util/groq/page-groq';
import { getPage } from '../util/groq/page-groq';
import type { GetPropertiesData } from '../util/types/next-types';

export function Index({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <PageLayout>
      <HomeLayout homeData={data} />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<
  GetPropertiesData<GetPageReturn>
> {
  const data = await getPage('home');

  return {
    props: {
      data,
    },
    revalidate: REVALIDATE,
  };
}

export default Index;
