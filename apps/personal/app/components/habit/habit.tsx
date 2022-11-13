import { Fragment } from 'react';

import { getTodaysHabits } from './data';
import styles from './habit.module.css';
import { HabitForm } from './habit-form';
import { HabitItem } from './habit-item';

export async function Habit(): Promise<JSX.Element> {
  const todaysHabits = await getTodaysHabits();

  return (
    <div>
      <h2>Add Habit</h2>
      <HabitForm />
      <h2>Habits Due</h2>
      <div className={styles.HabitContainer}>
        {todaysHabits.map(habit => {
          return (
            <Fragment key={habit.name}>
              <HabitItem habit={habit} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
