import { Container } from '../components';
import { CardStack } from './components/card-stack/card-stack';
import { PaginationDemo } from './components/pagination-demo/pagination-demo';
import { ProgressBarDemo } from './components/progress-bar-demo/progress-bar-demo';
import styles from './portfolio.module.css';

export default function Portfolio(): JSX.Element {
  return (
    <Container>
      <h1 className={styles.Header}>Components</h1>
      <div className={styles.ProjectContainer}>
        <CardStack />
        <ProgressBarDemo />
        <PaginationDemo />
      </div>
    </Container>
  );
}
