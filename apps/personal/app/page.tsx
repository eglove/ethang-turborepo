import { Calories } from './components/calories/calories';
import { Habit } from './components/habit/habit';
import { Health } from './components/health/health';
import styles from './page.module.css';

export default async function Home(): Promise<JSX.Element> {
  return (
    <div className={styles.PageContainer}>
      {/* @ts-expect-error shush */}
      <Health />
      {/* @ts-expect-error shush */}
      <Calories />
      {/* @ts-expect-error shush */}
      <Habit />
    </div>
  );
}
