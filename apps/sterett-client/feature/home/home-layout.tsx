import type { GetPageReturn } from '../../util/groq/page-groq';
import { Container } from '../common/container/container';
import { PortableTextWrapper } from '../common/portable-text';

type HomeLayoutProperties = {
  homeData: GetPageReturn;
};

export function HomeLayout({ homeData }: HomeLayoutProperties): JSX.Element {
  return (
    <Container>
      <div>
        {typeof homeData !== 'undefined' && (
          <PortableTextWrapper value={homeData.content} />
        )}
      </div>
    </Container>
  );
}
