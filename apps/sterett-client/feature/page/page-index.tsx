import { TrussNextLink } from 'trussworks-next-components';

import type { GetAllPagesReturn } from '../../util/groq/page-groq';
import { Container } from '../common/container/container';
import { NoContent } from '../common/no-content';

type PageIndexProperties = {
  pageData: GetAllPagesReturn;
};

export function PageIndex({ pageData }: PageIndexProperties): JSX.Element {
  if (pageData?.length === 0) {
    return <NoContent />;
  }

  return (
    <Container>
      {pageData?.map(datum => {
        return (
          <TrussNextLink href={`/page/${datum.slug.current}`} key={datum._id}>
            {datum.title}
          </TrussNextLink>
        );
      })}
    </Container>
  );
}
