import type { NextApiRequest, NextApiResponse } from 'next';
import { UsersService } from '../../services/users.service';
import { UsersCsvListService } from '../../services/usersCsvList.service';
import { UsersJsonListService } from '../../services/usersJsonList.service';
import { globalAPICall } from '../../utils/globalAPICall';

const userHandlerDependencies = new UsersService(
  new UsersCsvListService(),
  new UsersJsonListService(),
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const GET = async (dependencies: UsersService) => {
    const result = await dependencies.parseAndMergeAndFilterUserLists();
    res.status(200).json(result);
  };

  await globalAPICall<UsersService>(req, res, { GET }, userHandlerDependencies);
};

export default handler;
