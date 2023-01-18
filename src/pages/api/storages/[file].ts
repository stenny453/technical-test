import path from 'path';
import fs from 'fs';
import stream from 'stream';
import type { NextApiRequest, NextApiResponse } from 'next';
import proxyFile from '../../../lib/proxyfile';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405);
  }

  const { file } = req.query;
  const fullpath = path.resolve(path.join(process.cwd(), 'src/storages/data', file as string));

  if (!fs.existsSync(fullpath)) {
    return res.status(404).json({ message: 'not found' });
  }

  res.status(200);
  proxyFile(fullpath, res);
}
