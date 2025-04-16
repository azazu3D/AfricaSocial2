import { Handler } from '@netlify/functions';
import { unlink } from 'fs/promises';
import { join } from 'path';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { path } = JSON.parse(event.body || '{}');

    if (!path) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing path' }),
      };
    }

    // Delete file
    const filePath = join(process.cwd(), 'storage', path);
    await unlink(filePath);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Delete error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
}; 