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
    database_?.data?.healthRecord?.bmr.toFixed(0) ?? 0
  );

  if (
    database_?.data !== null &&
    typeof database_?.data?.calorieRecord !== 'undefined'
  ) {
    for (const id in database_?.data.calorieRecord) {
      if (getDayKey() === getDayKey(database_?.data.calorieRecord[id].date)) {
        todaysRecords.push(database_?.data.calorieRecord[id]);
      } else {
        // @ts-expect-error Delete record
        database_.data.calorieRecord = {
          ...database_.data.calorieRecord,
          [id]: undefined,
        };
      }
    }

    for (const todaysRecord of todaysRecords) {
      totalConsumedToday += todaysRecord.consumed;
    }

    await database_.write();
  }

  return { totalAllowedToday, totalConsumedToday };
};
