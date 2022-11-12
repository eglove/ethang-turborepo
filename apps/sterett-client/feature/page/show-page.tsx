import type { GetPageReturn } from '../../util/groq/page-groq';
import { Container } from '../common/container/container';
import { NoContent } from '../common/no-content';
import { PortableTextWrapper } from '../common/portable-text';

type ShowPageProperties = {
  pageData: GetPageReturn;
};

export function ShowPage({ pageData }: ShowPageProperties): JSX.Element {
  if (typeof pageData === 'undefined') {
    return <NoContent />;
  }

  return (
    <Container>
      <div>
        <PortableTextWrapper value={pageData.content} />
      </div>
    </Container>
  );
}
