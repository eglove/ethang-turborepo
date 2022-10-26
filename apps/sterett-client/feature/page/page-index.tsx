import { useQuery } from '@tanstack/react-query';
import { TrussNextLink } from 'trussworks-next-components';

import type { GetAllPagesReturn } from '../../util/groq/page-groq';
import { getAllPages, getAllPagesKey } from '../../util/groq/page-groq';
import { Container } from '../common/container/container';
import { NoContent } from '../common/no-content';

export function PageIndex(): JSX.Element {
  const { data } = useQuery<GetAllPagesReturn>(getAllPagesKey(), getAllPages);

  if (data?.length === 0) {
    return <NoContent />;
  }

  return (
    <Container>
      {data?.map(datum => {
        return (
          <TrussNextLink href={`/page/${datum.slug.current}`} key={datum._id}>
            {datum.title}
          </TrussNextLink>
        );
      })}
    </Container>
  );
}
