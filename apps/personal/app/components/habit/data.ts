import { sortObjectArray } from 'util-typescript';

import { database } from '../../lowdb/main';
import type { HabitRecordWithName } from '../../lowdb/types';
import { getDayKey } from '../../lowdb/util';

export const getDueHabits = async (): Promise<HabitRecordWithName[]> => {
  const { data } = await database();

  const habits = data?.habit;

  if (typeof habits !== 'undefined') {
    const dueHabits: HabitRecordWithName[] = [];

    for (const [key, habit] of Object.entries(habits)) {
      if (getDayKey(habit.due) <= getDayKey()) {
        dueHabits.push({
          ...habit,
          name: key,
        });
      }
    }

    return sortObjectArray(dueHabits, 'name');
  }

  return [];
};

export const getNotDueHabits = async (): Promise<HabitRecordWithName[]> => {
  const { data } = await database();

  const habits = data?.habit;

  if (typeof habits !== 'undefined') {
    const todayHabits: HabitRecordWithName[] = [];

    for (const [key, habit] of Object.entries(habits)) {
      if (getDayKey(habit.due) !== getDayKey()) {
        todayHabits.push({
          ...habit,
          name: key,
        });
      }
    }

    return sortObjectArray(todayHabits, 'name');
  }

  return [];
};
