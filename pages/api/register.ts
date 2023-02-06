import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

import { keys } from '@/config/keys';

type Data = {
  success: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const client = new Client({
      connectionString: keys.db.url,
    });
    await client.connect();

    const query =
      "INSERT INTO users (username, password) VALUES ($1, crypt($2, gen_salt('bf')))";
    const values = [req.body.username, req.body.password];

    await client.query(query, values);

    res.status(200).json({ success: true });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
}
