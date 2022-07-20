import { NextApiRequest, NextApiResponse } from 'next';
import { HttpException } from './httpException';

export const globalAPICall = async <T>(
  req: NextApiRequest,
  res: NextApiResponse,
  actions: { [key: string]: (dependencies: T) => Promise<void> },
  dependencies: T,
) => {
  try {
    const method = req?.method;
    if (!method) {
      throw new HttpException('Method not allowed', 405);
    }
    if (!Object.keys(actions).includes(method)) {
      console.log('method not allowed');
      throw new HttpException('Method not allowed', 405);
    }
    await actions[method](dependencies);
  } catch (err) {
    if (err instanceof HttpException) {
      const { statusCode, message } = err;
      res.status(statusCode).json({ statusCode, message });
    } else {
      res
        .status(500)
        .json({ statusCode: 500, message: 'Internal server error' });
    }
  }
};
