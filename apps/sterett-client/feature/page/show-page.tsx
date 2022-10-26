import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import type { GetPageReturn } from '../../util/groq/page-groq';
import { getPage, getPageKey } from '../../util/groq/page-groq';
import { Container } from '../common/container/container';
import { NoContent } from '../common/no-content';
import { PortableTextWrapper } from '../common/portable-text';

export function ShowPage(): JSX.Element {
  const { query } = useRouter();

  const { data } = useQuery<GetPageReturn>(
    getPageKey(query.slug as string),
    async () => {
      return getPage(query.slug as string);
    }
  );

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
