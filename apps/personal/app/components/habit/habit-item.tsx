'use client';
import ms from 'ms';
import { useRouter } from 'next/navigation';

import type { HabitRecordWithName } from '../../lowdb/types';
import { habitCompleteBody } from '../../lowdb/zod/zod-health-record';
import styles from './habit.module.css';

type HabitItemProperties = {
  habit: HabitRecordWithName;
  isDue: boolean;
};

export function HabitItem({ habit, isDue }: HabitItemProperties): JSX.Element {
  const router = useRouter();

  const handleComplete = async (): Promise<void> => {
    if (!isDue) {
      return;
    }

    const body = JSON.stringify(
      habitCompleteBody.parse({
        name: habit.name,
      })
    );

    // eslint-disable-next-line no-alert
    const confirmed = confirm(`Complete ${habit.name}?`);

    if (confirmed) {
      await fetch('/api/habit-complete', {
        body,
        method: 'POST',
      });

      router.refresh();
    }
  };

  return (
    <span
      className={`${styles.HabitItemContainer} ${
        isDue ? styles.HabitDueContainer : ''
      }`}
      onClick={handleComplete}
    >
      <strong>{habit.name}</strong> (Recurs every {ms(habit.recurs)})
    </span>
  );
}
