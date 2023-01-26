import type { NextApiRequest, NextApiResponse } from 'next';
import wait from '../../lib/wait';

type Data = {
  status: string;
  message: string;
  duration: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const t = Date.now();
  await wait(Math.floor(Math.random() * 2000));

  const duration = Date.now() - t;

  if (duration % 5 === 0) {
    return res.status(503).json({ status: 'ERROR', message: 'this is an intentional error', duration });
  }

  if (duration % 4 === 0) {
    return res.status(429).json({ status: 'ERROR', message: 'too many requests', duration });
  }

  if (duration % 3 === 0) {
    // status = 500
    return Promise.reject(new Error('this is another intentional error'));
  }

  res.status(200).json({ status: 'OK', message: 'It worked, no failure caught!', duration });
}
