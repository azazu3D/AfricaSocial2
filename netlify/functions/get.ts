import { Handler } from '@netlify/functions';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { path } = event.queryStringParameters || {};

    if (!path) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing path' }),
      };
    }

    // Read file
    const filePath = join(process.cwd(), 'storage', path);
    const fileContent = await readFile(filePath);

    return {
      statusCode: 200,
      body: fileContent.toString('base64'),
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    };
  } catch (error) {
    console.error('Get file error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
}; 