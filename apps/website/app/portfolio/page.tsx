import { Breadcrumbs, Container } from '../components';
import { CardStack } from './components/card-stack/card-stack';
import { PaginationDemo } from './components/pagination-demo/pagination-demo';
import { ProgressBarDemo } from './components/progress-bar-demo/progress-bar-demo';
import { ProgressStepsDemo } from './components/progress-steps-demo/progress-steps-demo';
import styles from './portfolio.module.css';

export default function Portfolio(): JSX.Element {
  return (
    <Container>
      <Breadcrumbs
        links={[
          {
            href: '/',
            label: 'Home',
          },
          {
            href: '/portfolio',
            label: 'Components',
          },
        ]}
      />
      <h1 className={styles.Header}>Components</h1>
      <div className={styles.ProjectContainer}>
        <CardStack />
        <ProgressStepsDemo />
        <ProgressBarDemo />
        <PaginationDemo />
      </div>
    </Container>
  );
}
