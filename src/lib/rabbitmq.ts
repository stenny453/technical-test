export const setupAmqpClient = (url: string) => {};

export const sendRequest = async (ch: any, payload: any) => {
  return Promise.reject(new Error('Not implemented yet'));
};

export const consume = (ch: any, handler: (msg: any) => void) => {
  console.log('Not implemented yet');
};
