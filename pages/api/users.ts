import type { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers } from "../../lib/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(await getAllUsers());
}
