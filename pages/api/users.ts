import type { NextApiRequest, NextApiResponse } from "next";
import { generateUsersData } from "../../services/usersDataManager";

// const fsp = require("fs").promises;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const usersData = await generateUsersData();
        res.status(200).json(usersData);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error reading users data from a new file",
        });
    }
}
