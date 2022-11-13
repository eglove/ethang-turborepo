import { database } from '../../lowdb/main';
import type { HabitRecord } from '../../lowdb/types';
import { getDayKey } from '../../lowdb/util';

export const getTodaysHabits = async (): Promise<
  Array<HabitRecord & { name: string }>
> => {
  const { data } = await database();

  const habits = data?.habit;

  if (typeof habits !== 'undefined') {
    const todayHabits: Array<HabitRecord & { name: string }> = [];

    for (const [key, habit] of Object.entries(habits)) {
      if (getDayKey(habit.due) === getDayKey()) {
        todayHabits.push({
          ...habit,
          name: key,
        });
      }
    }

    return todayHabits;
  }

  return [];
};

export const getNotDueHabits = async (): Promise<
  Array<HabitRecord & { name: string }>
> => {
  const { data } = await database();

  const habits = data?.habit;

  if (typeof habits !== 'undefined') {
    const todayHabits: Array<HabitRecord & { name: string }> = [];

    for (const [key, habit] of Object.entries(habits)) {
      if (getDayKey(habit.due) !== getDayKey()) {
        todayHabits.push({
          ...habit,
          name: key,
        });
      }
    }

    return todayHabits;
  }

  return [];
};
