import { TrussNextLink } from 'trussworks-next-components';

import { Container } from '../common/container/container';
import type { GetCovenantsReturn } from './covenants-groq';

type CovenantsLayoutProperties = {
  covenants: GetCovenantsReturn;
};

export function CovenantsLayout({
  covenants,
}: CovenantsLayoutProperties): JSX.Element {
  return (
    <Container>
      {covenants?.map(covenant => {
        return (
          <div
            data-testid="container"
            key={covenant._id}
            style={{ padding: '8px' }}
          >
            <TrussNextLink isNewTab href={covenant.file.asset.url}>
              {covenant.title}
            </TrussNextLink>
          </div>
        );
      })}
    </Container>
  );
}
