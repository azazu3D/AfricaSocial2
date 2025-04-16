import { Platform } from 'react-native';

interface StorageService {
  uploadFile: (file: File | Blob, path: string) => Promise<string>;
  getFileUrl: (path: string) => Promise<string>;
  deleteFile: (path: string) => Promise<void>;
}

class NetlifyStorage implements StorageService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = Platform.select({
      web: process.env.EXPO_PUBLIC_NETLIFY_URL || '',
      default: 'http://localhost:8888',
    });
  }

  async uploadFile(file: File | Blob, path: string): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);

    const response = await fetch(`${this.baseUrl}/.netlify/functions/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    const data = await response.json();
    return data.url;
  }

  async getFileUrl(path: string): Promise<string> {
    return `${this.baseUrl}/storage/${path}`;
  }

  async deleteFile(path: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/.netlify/functions/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ path }),
    });

    if (!response.ok) {
      throw new Error('Failed to delete file');
    }
  }
}

// Export a singleton instance
export const storageService = new NetlifyStorage(); 