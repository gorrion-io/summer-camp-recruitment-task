import type { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers } from "../../lib/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const result = await getAllUsers();
  if (result) res.status(200).json({ status: "success", payload: result });
  else res.status(404).json({ status: "failed", payload: [] });
}
