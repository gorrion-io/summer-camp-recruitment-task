import type { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers, User } from "../../lib/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.send({ message: "Not implemented" });
}
