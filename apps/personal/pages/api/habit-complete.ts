import type { NextApiRequest, NextApiResponse } from 'next';

import { database } from '../../app/lowdb/main';
import { habitCompleteBody } from '../../app/lowdb/zod/zod-health-record';

type Data = {
  success: boolean;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
): Promise<void> {
  const database_ = await database();

  if (request.method === 'POST') {
    const { name } = habitCompleteBody.parse(JSON.parse(request.body));

    if (
      database_.data !== null &&
      typeof database_.data.habit !== 'undefined'
    ) {
      database_.data.habit[name].due = new Date(
        new Date().setMilliseconds(
          new Date().getMilliseconds() + database_.data.habit[name].recurs
        )
      );

      await database_.write();

      response.status(200).json({ success: true });
      return;
    }
  }

  response.status(500).json({ success: false });
}
