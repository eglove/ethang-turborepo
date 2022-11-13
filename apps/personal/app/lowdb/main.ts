import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { Adapter } from 'lowdb';
import { Low } from 'lowdb';
// @ts-expect-error ??????
import { JSONFile } from 'lowdb/node';

import type { PersonalDatabase } from './types';

export const database = async (): Promise<Low<PersonalDatabase>> => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file = join(__dirname, 'db.json');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const adapter = new JSONFile<PersonalDatabase>(
    file
  ) as Adapter<PersonalDatabase>;
  const database = new Low<PersonalDatabase>(adapter);

  await database.read();

  return database;
};
