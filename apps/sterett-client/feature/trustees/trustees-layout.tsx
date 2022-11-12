import { TrussNextLink } from 'trussworks-next-components';

import { Container } from '../common/container/container';
import { TrusteeImage } from './trustee-image';
import styles from './trustees.module.css';
import type { GetTrusteesReturn } from './trustees-groq';

type TrusteesLayoutProperties = {
  trustees: GetTrusteesReturn;
};

export function TrusteesLayout({
  trustees,
}: TrusteesLayoutProperties): JSX.Element {
  return (
    <Container>
      <div className={styles.TrusteeContainer}>
        {trustees?.map(trustee => {
          return (
            <div className={styles.TrusteeGrid} key={trustee._id}>
              <TrusteeImage altText={trustee.name} image={trustee.image} />
              <div>
                <strong>{trustee.name}</strong>
                <p>
                  <TrussNextLink href={`tel:${trustee.phoneNumber}`}>
                    {trustee.phoneNumber}
                  </TrussNextLink>
                </p>
                <p>{trustee.duties}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
