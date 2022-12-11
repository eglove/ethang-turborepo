import { Fragment } from 'react';

import { getDueHabits, getNotDueHabits } from './data';
import styles from './habit.module.css';
import { HabitForm } from './habit-form';
import { HabitItem } from './habit-item';

export async function Habit(): Promise<JSX.Element> {
  const dueHabits = await getDueHabits();
  const notDue = await getNotDueHabits();

  return (
    <div>
      <h2>Add Habit</h2>
      <HabitForm />
      <h2>Habits Due</h2>
      <div className={styles.HabitContainer}>
        {dueHabits.map(habit => {
          return (
            <Fragment key={habit.name}>
              <HabitItem isDue habit={habit} />
            </Fragment>
          );
        })}
      </div>
      <h2>Not Due</h2>
      <div className={styles.HabitContainer}>
        {notDue.map(habit => {
          return (
            <Fragment key={habit.name}>
              <HabitItem habit={habit} isDue={false} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
