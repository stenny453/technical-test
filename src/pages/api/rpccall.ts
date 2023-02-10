import type { NextApiRequest, NextApiResponse } from 'next';
import wait from '../../lib/wait';
import amqp, { Connection, Channel, ConsumeMessage, Message } from 'amqplib';
import { v4 } from 'uuid';

type Data = {
  result: string;
};

export const initRabbitQMConnection = async (): Promise<Channel> => {
  const connect: Connection =  await amqp.connect(process.env.RABBITMQ_URL as string);
  return await connect.createChannel();
}

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
  return new Promise(async (resolve, reject) => {
    try {
      const exchange = "input.rpc";
      const channel: Channel = await initRabbitQMConnection();

      await channel.assertExchange(exchange, "direct", { durable: false });

      const { queue } = await channel.assertQueue("", { exclusive: true });

      const correlationId = v4();

      channel.consume(queue, (message: ConsumeMessage | null) => {
        if (message?.properties.correlationId == correlationId) {
          const result = message.content.toString();
          console.log("response from worker ", result);
          
          resolve(result);
          channel.ack(message as Message);
        }
      }, { noAck: false });

      channel.publish(exchange, process.env.RABBITMQ_KEY as string, Buffer.from(payload), {
        correlationId,
        replyTo: queue
      });

    } catch (error) {
      reject(error);
    }
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { payload } = JSON.parse(req.body);

  // await wait(Math.floor(Math.random() * 2000));

  const result = await processPayload(payload);

  res.status(200).json({ result });
}
