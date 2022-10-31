import { useQuery } from '@tanstack/react-query';
import { TrussNextLink } from 'trussworks-next-components';

import { Container } from '../common/container/container';
import type { GetCovenantsReturn } from './covenants-groq';
import { getCovenants, getCovenantsKey } from './covenants-groq';

export function CovenantsLayout(): JSX.Element {
  const { data } = useQuery<GetCovenantsReturn>(
    getCovenantsKey(),
    getCovenants
  );

  return (
    <Container>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      <>
        {data?.map(covenant => {
          return (
            <div key={covenant._id} style={{ padding: '8px' }}>
              <TrussNextLink isNewTab href={covenant.file.asset.url}>
                {covenant.title}
              </TrussNextLink>
            </div>
          );
        })}
      </>
    </Container>
  );
}
