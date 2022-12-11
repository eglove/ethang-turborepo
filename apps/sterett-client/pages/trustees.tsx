import type { InferGetStaticPropsType } from 'next';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import type { GetTrusteesReturn } from '../feature/trustees/trustees-groq';
import { getTrustees } from '../feature/trustees/trustees-groq';
import { TrusteesLayout } from '../feature/trustees/trustees-layout';
import { REVALIDATE } from '../util/constants';
import type { GetPropertiesData } from '../util/types/next-types';

export default function Trustees({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <PageLayout>
      <TrusteesLayout trustees={data} />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<
  GetPropertiesData<GetTrusteesReturn>
> {
  const trustees = await getTrustees();

  return {
    props: {
      data: trustees,
    },
    revalidate: REVALIDATE,
  };
}
