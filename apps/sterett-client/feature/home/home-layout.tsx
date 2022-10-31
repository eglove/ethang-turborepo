import { useQuery } from '@tanstack/react-query';

import type { GetPageReturn } from '../../util/groq/page-groq';
import { getPage, getPageKey } from '../../util/groq/page-groq';
import { Container } from '../common/container/container';
import { PortableTextWrapper } from '../common/portable-text';

export function HomeLayout(): JSX.Element {
  const { data } = useQuery<GetPageReturn>(getPageKey('home'), async () => {
    return getPage('home');
  });

  return (
    <Container>
      <div>
        {typeof data !== 'undefined' && (
          <PortableTextWrapper value={data.content} />
        )}
      </div>
    </Container>
  );
}
