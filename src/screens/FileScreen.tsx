import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useFileStore } from '../store/fileStore';
import { useAuthStore } from '../store/authStore';
import { File } from '../types/file';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';

export const FileScreen = () => {
  const { files, loading, error, uploadFile, listFiles, deleteFile } = useFileStore();
  const { user } = useAuthStore();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (user) {
      listFiles(user.uid);
    }
  }, [user]);

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      if (result.type === 'success') {
        const formData = new FormData();
        formData.append('file', {
          uri: result.uri,
          name: result.name,
          type: result.mimeType,
        } as any);
        formData.append('userId', user?.uid || '');

        await uploadFile(formData);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick file');
    }
  };

  const handleDelete = async (file: File) => {
    Alert.alert(
      'Delete File',
      'Are you sure you want to delete this file?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await deleteFile(file.id);
            } catch (error) {
              Alert.alert('Error', 'Failed to delete file');
            }
          },
          style: 'destructive',
        },
      ],
    );
  };

  const renderFileItem = ({ item }: { item: File }) => (
    <TouchableOpacity
      style={styles.fileItem}
      onPress={() => setSelectedFile(item)}
      onLongPress={() => handleDelete(item)}
    >
      <Ionicons name="document-outline" size={24} color="#007AFF" />
      <View style={styles.fileInfo}>
        <Text style={styles.fileName}>{item.name}</Text>
        <Text style={styles.fileSize}>
          {(item.size / 1024 / 1024).toFixed(2)} MB
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadButton} onPress={handleFilePick}>
        <Ionicons name="cloud-upload-outline" size={24} color="#FFFFFF" />
        <Text style={styles.uploadButtonText}>Upload File</Text>
      </TouchableOpacity>

      <FlatList
        data={files}
        renderItem={renderFileItem}
        keyExtractor={(item) => item.id}
        style={styles.fileList}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No files uploaded yet</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  fileList: {
    flex: 1,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    marginBottom: 8,
  },
  fileInfo: {
    marginLeft: 12,
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  fileSize: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  error: {
    color: '#FF3B30',
    fontSize: 16,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: '#666666',
    fontSize: 16,
    marginTop: 32,
  },
}); 