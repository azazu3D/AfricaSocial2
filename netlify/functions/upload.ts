import { Handler } from '@netlify/functions';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { path = '', content, filename } = JSON.parse(event.body || '{}');

    if (!content || !filename) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Create directory if it doesn't exist
    const dirPath = join(process.cwd(), 'storage', path);
    await mkdir(dirPath, { recursive: true });

    // Write file
    const filePath = join(dirPath, filename);
    await writeFile(filePath, content);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'File uploaded successfully' }),
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
}; 