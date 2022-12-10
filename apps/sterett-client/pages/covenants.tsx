import type { InferGetStaticPropsType } from 'next';

import { PageLayout } from '../feature/common/page-layout/page-layout';
import type { GetCovenantsReturn } from '../feature/covenants/covenants-groq';
import { getCovenants } from '../feature/covenants/covenants-groq';
import { CovenantsLayout } from '../feature/covenants/covenants-layout';
import { REVALIDATE } from '../util/constants';
import type { GetPropertiesData } from '../util/types/next-types';

export default function Covenants({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <PageLayout>
      <CovenantsLayout covenants={data} />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<
  GetPropertiesData<GetCovenantsReturn>
> {
  const covenants = await getCovenants();

  return {
    props: {
      data: covenants,
    },
    revalidate: REVALIDATE,
  };
}
