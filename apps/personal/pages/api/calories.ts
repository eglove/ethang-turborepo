import { randomUUID } from 'node:crypto';

import type { NextApiRequest, NextApiResponse } from 'next';

import { database } from '../../app/lowdb/main';
import { caloriePostBody } from '../../app/lowdb/zod/zod-health-record';

type Data = {
  success: boolean;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
): Promise<void> {
  const database_ = await database();

  if (request.method === 'POST') {
    const { calories } = caloriePostBody.parse(JSON.parse(request.body));

    if (
      database_.data !== null &&
      typeof database_.data.calorieRecord !== 'undefined'
    ) {
      database_.data.calorieRecord[randomUUID()] = {
        consumed: calories,
        date: new Date(),
      };

      await database_.write();

      response.status(200).json({ success: true });
      return;
    }
  }

  response.status(500).json({ success: false });
}
