interface FetchOptions extends RequestInit {
  // number of retries before returning the error
  retries?: number;

  // timeout in milliseconds to not exceed to receive a response from server
  timeout?: number;
}

const retryFlow = (func: Function, retriesLeft: number): Promise<Response> => { 
  return new Promise((resolve, reject) => {
    func()
      .then((response: Response) => {
        console.log("Left retries : ", retriesLeft);
        if (response.status != 200 && retriesLeft > 0) {
          return resolve(retryFlow(func, retriesLeft - 1));
        } else {
          resolve(response);
        }
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
};

const timeoutFlow = (timeout: number, promise: Promise<Response>): Promise<Response> => { 
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      resolve(promise);      
      return false;
    }, timeout);

    promise.then(
      (result: Response) => {
        clearTimeout(timeoutId);
        resolve(result);
      },
      (error: Error) => {
        clearTimeout(timeoutId);
        reject(error);
      }
    );
  })
};


/**
 * Execute fetch with additional options, inlcuding retries and timeout
 *
 * @param url: URL to call
 * @param o FetchOptions: options to pass to fetch, including retries and timeout
 *
 * @todo:
 * - implement retries flow: when the request fails, the retry flow is executed.
 *    When attempts are exhausted, the entire process should result into failure
 *    by keeping the original error
 * - timeout flow: when the response is not received within the timeout,
 *    the request is aborted, and the retry flow is executed
 *
 * You can find an example of usage at `src/app/fetch/pages.tsx`
 * It makes an API call to /api/mayfail, which may fail over calls and duration varies from 0 to 2 seconds
 *
 * So for better testing, you can change the `retries` and `timeout` values to have a value under 2 seconds
 *
 * @param url
 * @param o
 * @returns
 */
export default async function fetchEnhanced(url: string, o: FetchOptions): Promise<Response> {
  const { retries = 0, timeout = 0, ...options } = o || {};
  console.log('additional options', { retries, timeout });

  return timeoutFlow(timeout, retryFlow(() => fetch(url, options), retries));
}
