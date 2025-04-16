import { Handler } from '@netlify/functions';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const filePath = event.queryStringParameters?.path;
    if (!filePath) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'File path is required' }),
      };
    }

    const fullPath = join(process.cwd(), 'storage', filePath);
    const fileContent = await readFile(fullPath);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${filePath.split('/').pop()}"`,
      },
      body: fileContent.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error('Error downloading file:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to download file' }),
    };
  }
}; 