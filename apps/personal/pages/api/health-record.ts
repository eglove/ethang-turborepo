// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { database } from '../../app/lowdb/main';
import { healthRecordPostBody } from '../../app/lowdb/zod/zod-health-record';

type Data = {
  success: boolean;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
): Promise<void> {
  const database_ = await database();

  if (request.method === 'POST') {
    const { age, height, weight } = healthRecordPostBody.parse(
      JSON.parse(request.body)
    );

    const weightInKg = weight * 0.453_592;
    const heightInCm = height / 0.393_701;
    const bmr = 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * age + 88.362;

    if (
      database_.data !== null &&
      typeof database_.data.healthRecord !== 'undefined'
    ) {
      database_.data.healthRecord = {
        age,
        bmr,
        date: new Date(),
        heightIn: height,
        weightLb: weight,
      };

      await database_.write();

      response.status(200).json({ success: true });
      return;
    }
  }

  response.status(500).json({ success: false });
}
