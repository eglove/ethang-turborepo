import { database } from '../../lowdb/main';
import type { HealthRecord } from '../../lowdb/types';

export const getTodaysRecord = async (): Promise<HealthRecord | undefined> => {
  const database_ = await database();

  return database_?.data?.healthRecord;
};
