import { create } from 'zustand';
import { fileService } from '../services/fileService';
import { File } from '../types/file';

interface FileState {
  files: File[];
  currentFile: File | null;
  loading: boolean;
  error: string | null;
  uploadFile: (data: FormData) => Promise<void>;
  downloadFile: (fileId: string) => Promise<string>;
  listFiles: (userId: string) => Promise<void>;
  getFile: (fileId: string) => Promise<void>;
  deleteFile: (fileId: string) => Promise<void>;
  clearError: () => void;
}

export const useFileStore = create<FileState>((set) => ({
  files: [],
  currentFile: null,
  loading: false,
  error: null,

  uploadFile: async (data: FormData) => {
    try {
      set({ loading: true, error: null });
      const file = await fileService.upload(data);
      set((state) => ({
        files: [...state.files, file],
        loading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  downloadFile: async (fileId: string) => {
    try {
      set({ loading: true, error: null });
      const url = await fileService.download(fileId);
      set({ loading: false });
      return url;
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
      throw error;
    }
  },

  listFiles: async (userId: string) => {
    try {
      set({ loading: true, error: null });
      const files = await fileService.list(userId);
      set({ files, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  getFile: async (fileId: string) => {
    try {
      set({ loading: true, error: null });
      const file = await fileService.get(fileId);
      set({ currentFile: file, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  deleteFile: async (fileId: string) => {
    try {
      set({ loading: true, error: null });
      await fileService.delete(fileId);
      set((state) => ({
        files: state.files.filter((file) => file.id !== fileId),
        loading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  clearError: () => set({ error: null }),
})); 