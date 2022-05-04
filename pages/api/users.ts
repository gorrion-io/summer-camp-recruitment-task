import type { NextApiRequest, NextApiResponse } from "next";
import Router, {Request, Response} from 'express';
import {getAllUsers} from "../../lib/users";

//configuration of express is deployed in index.ts
//to work with the api use : ts-node index.ts, and go lo localhost:3000


export const router = Router();

router.get('/',async (req:Request,res:Response)=>{
  const users = await getAllUsers();
  console.log(users);
  res.send(users);
})
















export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(501).json({ message: "Not implemented" });
}
