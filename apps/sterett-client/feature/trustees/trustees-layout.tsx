import { useQuery } from '@tanstack/react-query';
import { TrussNextLink } from 'trussworks-next-components';

import { Container } from '../common/container/container';
import { NoContent } from '../common/no-content';
import { TrusteeImage } from './trustee-image';
import styles from './trustees.module.css';
import { getTrustees, getTrusteesKey } from './trustees-groq';

export function TrusteesLayout(): JSX.Element {
  const { data } = useQuery(getTrusteesKey(), getTrustees);

  if (data?.length === 0) {
    return <NoContent />;
  }

  return (
    <Container>
      <div className={styles.TrusteeContainer}>
        {data?.map(trustee => {
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
