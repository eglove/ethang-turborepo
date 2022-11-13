'use client';
import ms from 'ms';
import { useRouter } from 'next/navigation';

import type { HabitRecord } from '../../lowdb/types';
import { habitCompleteBody } from '../../lowdb/zod/zod-health-record';
import styles from './habit.module.css';

type HabitItemProperties = {
  habit: HabitRecord & { name: string };
};

export function HabitItem({ habit }: HabitItemProperties): JSX.Element {
  const router = useRouter();

  const handleComplete = async (): Promise<void> => {
    const body = JSON.stringify(
      habitCompleteBody.parse({
        name: habit.name,
      })
    );

    // eslint-disable-next-line no-alert
    const confirmed = confirm('Mark as complete?');

    if (confirmed) {
      await fetch('/api/habit-complete', {
        body,
        method: 'POST',
      });

      router.refresh();
    }
  };

  return (
    <span className={styles.HabitItemContainer} onClick={handleComplete}>
      <strong>{habit.name}</strong> (Recurs every {ms(habit.recurs)})
    </span>
  );
}
