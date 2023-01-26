// @ts-ignore
new Promise((r) => {
  console.log('Worker running...');
  console.log('@todo: This worker is supposed to consume messages from a rabbitMQ broker and respond to them via an RPC reply');
})
  .then(console.dir)
  .catch(console.error);
