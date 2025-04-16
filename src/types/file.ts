export interface File {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  metadata?: {
    [key: string]: any;
  };
} 