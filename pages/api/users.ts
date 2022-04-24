// features
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllUsers } from '../../lib/users';
// lib
import { User } from '../../lib/users';

// get usersList API

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    // checking request's method
    if (req.method === 'GET') {
      const usersList: User[] = await getAllUsers();
      res.status(200).json(usersList);
    } else {
      res.status(501).json({
        status: false,
        message: "server doesn't support this request's method",
      });
    }
    // catching errors
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: false });
  }
}
