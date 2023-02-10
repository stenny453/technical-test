import { initRabbitQMConnection } from './pages/api/rpccall';
import { Channel, Message } from 'amqplib';

// @ts-ignore
new Promise(async (r) => {
  try {
    const exchange = "input.rpc";
    const channel: Channel = await initRabbitQMConnection();

    await channel.assertExchange(exchange, "direct", { durable: false });
    const { queue } = await channel.assertQueue(process.env.RABBITMQ_QUEUE as string, { exclusive: true });
    await channel.bindQueue(queue, exchange, process.env.RABBITMQ_KEY as string);
    
    channel.consume(queue, async (message) => {
      const req = message?.content.toString();
      channel.sendToQueue(message?.properties.replyTo, Buffer.from(req!!.toUpperCase()), {
        correlationId: message?.properties.correlationId
      });

      channel.ack(message!! as Message);
    });

  } catch (error) {
    console.log(error);
  }
});
