import type { GetPageReturn } from '../../util/groq/page-groq';
import { Container } from '../common/container/container';
import { PortableTextWrapper } from '../common/sanity-portable/portable-text';

type HomeLayoutProperties = {
  homeData: GetPageReturn;
};

export function HomeLayout({ homeData }: HomeLayoutProperties): JSX.Element {
  return (
    <Container>
      <div>
        {homeData !== undefined && (
          <PortableTextWrapper value={homeData.content} />
        )}
      </div>
    </Container>
  );
}
