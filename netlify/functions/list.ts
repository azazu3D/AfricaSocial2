import { Handler } from '@netlify/functions';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const path = event.queryStringParameters?.path || '';
    const dirPath = join(process.cwd(), 'storage', path);

    const files = await readdir(dirPath);
    const fileDetails = await Promise.all(
      files.map(async (file) => {
        const filePath = join(dirPath, file);
        const stats = await stat(filePath);
        return {
          name: file,
          isDirectory: stats.isDirectory(),
          path: join(path, file),
          size: stats.size,
          modified: stats.mtime,
        };
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify(fileDetails),
    };
  } catch (error) {
    console.error('List error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
}; 