// @ts-ignore
new Promise((r) => {
  console.log('Worker running...');
  r(process.pid);
})
  .then(console.dir)
  .catch(console.error);
