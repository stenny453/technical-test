---
title: RPC flow with RabbitMQ
position: Fullstack
file: src/helpers/mq.ts
difficulty: hard
---

# RPC flow with RabbitMQ

---

Difficulty: **Hard**

Tags: **Backend**, **Messaging**, **RPC**

---

For this challenge we designed a more complex flow:

- from the page [RPC Flow](/rpc), a call to `/api/rpccall` is triggered on load or manually,
- the API will send a message into a rabbitmq broker through an exchange named `input.rpc` of type 'DIRECT'
- in other part, there is a worker located at `./src/worker.ts` which will consume messages in a queue `my.queue.<your-name>`. 
- there should be a binding key `<your-name>` that will route message sent through the exchange to land into that queue
- once a message is treated successfully, it should reply to the caller (the API) with a response as `result`, then the API will send that result in a json response

![](https://www.rabbitmq.com/img/tutorials/python-six.png)

**@todo**

Here are what we expect you do:

> 1. configure the broker to have:
  * the exchange `input.rpc`, type direct
  * the queue `my.queue.<your-name>`, with a binding key `<your-name>` that supposes to routes messages coming into the axchange into that queue
> 2. write the message publisher in `./src/pages/rpccall.ts`. You have to fill the function `processPayload` and use it
> 3. write the consumer in `./src/worker.ts`. In this side you have to consume messages received in the queue `my.queue.<your-name>`, with parameter `exclusive: true`, then make sure to respond into the initial caller. What the tis worker is quite simple, it will conver the `payload: string` into UPPERCASE


### Environment

As a broker you can use `process.env.RABBITMQ_URL`

To run the worker, just launch `yarn worker`