import { ServerResponse } from 'http';

export default function passthrough(filepath: string, res: ServerResponse): ServerResponse {
  // @todo:
  // 1. implement this function, use `PassThrough` stream to pipe the file content to the response explain what `PassThrough` stream is and why it is used here, could you tell another way to do this?
  // 2. add headers:
  //   - Cache-Control: max-age=3600, public
  //   - X-Metadata: technical-test
  // to see result, check `http://localhost:3000/api/storages/working.json`

  return res.end(`// @todo: implement this function, use \`PassThrough\` stream to show content of ${filepath}, then set additional headers`);
}
