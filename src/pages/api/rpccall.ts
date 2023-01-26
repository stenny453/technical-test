import type { NextApiRequest, NextApiResponse } from 'next';
import wait from '../../lib/wait';

type Data = {
  result: string;
};

/**
 * Process a payload
 *
 * @todo:
 * - send the payload into rabbitmq, through `input.rpc` exchange
 * - make sure to send it with a binding key of `<your-name>`
 * - configure your publisher to wait for a response from the consumer
 * - all that flow shoudl be handled with a async process
 *
 * @param payload
 * @returns
 */
const processPayload = async (payload: string): Promise<string> => {
  return payload;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { payload } = req.body;

  await wait(Math.floor(Math.random() * 2000));

  res.status(200).json({ result: '@todo: This result should be something responded by ./src/worker.ts via RPC flow over a rabbitMQ broker' });
}
