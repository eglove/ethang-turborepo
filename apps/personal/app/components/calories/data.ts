import { database } from '../../lowdb/main';
import type { CalorieRecord } from '../../lowdb/types';
import { getDayKey } from '../../lowdb/util';

type GetCalorieDataReturn = {
  totalAllowedToday: number;
  totalConsumedToday: number;
};

export const getCalorieData = async (): Promise<GetCalorieDataReturn> => {
  const database_ = await database();
  const todaysRecords: CalorieRecord[] = [];
  let totalConsumedToday = 0;
  const totalAllowedToday = Number(
    database_?.data?.healthRecord?.[getDayKey()]?.bmr.toFixed(0) ?? 0
  );

  if (
    database_?.data !== null &&
    typeof database_?.data?.calorieRecord !== 'undefined'
  ) {
    for (const id in database_?.data.calorieRecord) {
      if (getDayKey() === getDayKey(database_?.data.calorieRecord[id].date)) {
        todaysRecords.push(database_?.data.calorieRecord[id]);
      } else {
        delete database_?.data.calorieRecord[id];
      }
    }

    for (const todaysRecord of todaysRecords) {
      totalConsumedToday += todaysRecord.consumed;
    }

    await database_.write();
  }

  return { totalAllowedToday, totalConsumedToday };
};
