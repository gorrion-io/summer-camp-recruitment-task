import type { NextApiRequest, NextApiResponse } from "next";
import getAllUsers from "../../lib/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const users = await getAllUsers();
  if (users) {
    res.statusCode = 200;
    res.json({ users, status: res.statusCode });
  } else {
    res.status(501).json({ message: "Not implemented" });
  }
}
