import { database } from '../../lowdb/main';
import type { HealthRecord } from '../../lowdb/types';
import { getDayKey } from '../../lowdb/util';

export const getTodaysRecord = async (): Promise<HealthRecord | undefined> => {
  const { data } = await database();

  return data?.healthRecord?.[getDayKey()];
};
