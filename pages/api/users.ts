import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllUsers } from '../../lib/users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await res.status(501).json({ message: 'Not implemented' });
}
