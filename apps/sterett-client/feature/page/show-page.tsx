import type { GetPageReturn } from '../../util/groq/page-groq';
import { Container } from '../common/container/container';
import { NoContent } from '../common/no-content/no-content';
import { PortableTextWrapper } from '../common/sanity-portable/portable-text';

type ShowPageProperties = {
  pageData: GetPageReturn;
};

export function ShowPage({ pageData }: ShowPageProperties): JSX.Element {
  if (pageData === undefined) {
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
