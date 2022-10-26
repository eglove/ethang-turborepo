import { useQuery } from '@tanstack/react-query';

import type { GetPageReturn } from '../../util/groq/page-groq';
import { getPage, getPageKey } from '../../util/groq/page-groq';
import { Container } from '../common/container/container';
import { NoContent } from '../common/no-content';
import { PortableTextWrapper } from '../common/portable-text';

export function HomeLayout(): JSX.Element {
  const { data } = useQuery<GetPageReturn>(getPageKey('home'), async () => {
    return getPage('home');
  });

  if (typeof data === 'undefined') {
    return <NoContent />;
  }

  return (
    <Container>
      <div>
        <PortableTextWrapper value={data.content} />
      </div>
    </Container>
  );
}
