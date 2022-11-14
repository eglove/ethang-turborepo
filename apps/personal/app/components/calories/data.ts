import { database } from '../../lowdb/main';
import type { CalorieRecord } from '../../lowdb/types';
import { getDayKey } from '../../lowdb/util';

type GetCalorieDataReturn = {
  totalAllowedToday: number;
  totalConsumedToday: number;
};

export const getCalorieData = async (): Promise<GetCalorieDataReturn> => {
  const { data } = await database();
  const todaysRecords: CalorieRecord[] = [];
  let totalConsumedToday = 0;
  const totalAllowedToday = Number(
    data?.healthRecord?.[getDayKey()]?.bmr.toFixed(0) ?? 0
  );

  if (data !== null && typeof data?.calorieRecord !== 'undefined') {
    for (const id in data.calorieRecord) {
      if (getDayKey() === getDayKey(data.calorieRecord[id].date)) {
        todaysRecords.push(data.calorieRecord[id]);
      }
    }

    for (const todaysRecord of todaysRecords) {
      totalConsumedToday += todaysRecord.consumed;
    }
  }

  return { totalAllowedToday, totalConsumedToday };
};
