import { database } from '../../lowdb/main';
import type { HealthRecord } from '../../lowdb/types';
import { getDayKey } from '../../lowdb/util';

export const getTodaysRecord = async (): Promise<HealthRecord | undefined> => {
  const database_ = await database();

  const todayKey = getDayKey();

  for (const key in database_?.data?.healthRecord) {
    if (key !== todayKey) {
      delete database_?.data?.healthRecord[key];
    }
  }

  await database_?.write();

  return database_?.data?.healthRecord?.[todayKey];
};
