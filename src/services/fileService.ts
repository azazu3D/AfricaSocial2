import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { File } from '../types/file';

export class FileError extends Error {
  constructor(public code: string, message: string) {
    super(message);
    this.name = 'FileError';
  }
}

interface UploadFile {
  uri: string;
  name: string;
  type: string;
  size: number;
}

export const fileService = {
  async upload(data: FormData): Promise<File> {
    try {
      const fileData = data.get('file') as unknown as UploadFile;
      const userId = data.get('userId') as string;
      const storageRef = ref(storage, `files/${userId}/${fileData.name}`);
      
      // Convert the file data to a Blob
      const response = await fetch(fileData.uri);
      const blob = await response.blob();
      
      await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(storageRef);
      
      return {
        id: storageRef.fullPath,
        name: fileData.name,
        type: fileData.type,
        size: fileData.size,
        url,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId,
      };
    } catch (error) {
      throw new FileError('upload-failed', 'Failed to upload file');
    }
  },

  async download(fileId: string): Promise<string> {
    try {
      const storageRef = ref(storage, fileId);
      return await getDownloadURL(storageRef);
    } catch (error) {
      throw new FileError('download-failed', 'Failed to download file');
    }
  },

  async list(userId: string): Promise<File[]> {
    try {
      const storageRef = ref(storage, `files/${userId}`);
      const result = await listAll(storageRef);
      const files: File[] = [];
      
      for (const item of result.items) {
        const url = await getDownloadURL(item);
        const metadata = await item.getMetadata();
        
        files.push({
          id: item.fullPath,
          name: item.name,
          type: metadata.contentType || 'unknown',
          size: metadata.size || 0,
          url,
          createdAt: new Date(metadata.timeCreated),
          updatedAt: new Date(metadata.updated),
          userId,
        });
      }
      
      return files;
    } catch (error) {
      throw new FileError('list-failed', 'Failed to list files');
    }
  },

  async get(fileId: string): Promise<File> {
    try {
      const storageRef = ref(storage, fileId);
      const url = await getDownloadURL(storageRef);
      const metadata = await storageRef.getMetadata();
      
      return {
        id: storageRef.fullPath,
        name: storageRef.name,
        type: metadata.contentType || 'unknown',
        size: metadata.size || 0,
        url,
        createdAt: new Date(metadata.timeCreated),
        updatedAt: new Date(metadata.updated),
        userId: storageRef.parent?.name || '',
      };
    } catch (error) {
      throw new FileError('get-failed', 'Failed to get file');
    }
  },

  async delete(fileId: string): Promise<void> {
    try {
      const storageRef = ref(storage, fileId);
      await deleteObject(storageRef);
    } catch (error) {
      throw new FileError('delete-failed', 'Failed to delete file');
    }
  },
}; 