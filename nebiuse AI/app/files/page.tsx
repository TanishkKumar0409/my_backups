'use client';

import { useState, useEffect, useRef } from 'react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { FileText, Upload, Trash2, Download, Search, Calendar, HardDrive } from 'lucide-react';
import { toast } from 'sonner';

interface FileItem {
  _id: string;
  filename: string;
  originalName: string;
  fileUrl: string;
  description?: string;
  fileSize: number;
  mimeType: string;
  uploadedAt: string;
}

export default function FilesPage() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  useEffect(() => {
    filterFiles();
  }, [files, searchTerm]);

  const fetchFiles = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch('/api/files', {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setFiles(data.files);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
      toast.error('Failed to fetch files');
    } finally {
      setLoading(false);
    }
  };

  const filterFiles = () => {
    let filtered = files;

    if (searchTerm) {
      filtered = filtered.filter(file =>
        file.originalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredFiles(filtered);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      toast.error('File size exceeds 10MB limit');
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      toast.error('Please select a file');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('description', description);

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const response = await fetch('/api/files', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (response.ok) {
        toast.success('File uploaded successfully!');
        setIsUploadDialogOpen(false);
        resetUploadForm();
        fetchFiles();
      } else {
        const error = await response.json();
        toast.error(error.error || 'Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Failed to upload file');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleDelete = async (fileId: string) => {
    if (!confirm('Are you sure you want to delete this file?')) return;

    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch(`/api/files/${fileId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        toast.success('File deleted successfully!');
        fetchFiles();
      } else {
        toast.error('Failed to delete file');
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      toast.error('Failed to delete file');
    }
  };

  const resetUploadForm = () => {
    setSelectedFile(null);
    setDescription('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType.startsWith('image/')) return '🖼️';
    if (mimeType.startsWith('video/')) return '🎥';
    if (mimeType.startsWith('audio/')) return '🎵';
    if (mimeType.includes('pdf')) return '📄';
    if (mimeType.includes('zip') || mimeType.includes('rar')) return '📦';
    if (mimeType.includes('text')) return '📝';
    return '📎';
  };

  return (
    <ProtectedRoute>
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">File Management</h1>
            <p className="mt-2 text-gray-600">Upload and manage your development files</p>
          </div>
          <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                <Upload className="h-4 w-4 mr-2" />
                Upload File
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Upload New File</DialogTitle>
                <DialogDescription>
                  Upload a file to your development resource collection (Max: 10MB)
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleUpload} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="file">File *</Label>
                  <Input
                    id="file"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    disabled={uploading}
                    required
                  />
                  {selectedFile && (
                    <Alert>
                      <AlertDescription>
                        Selected: {selectedFile.name} ({formatFileSize(selectedFile.size)})
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Brief description of this file"
                    rows={3}
                    disabled={uploading}
                  />
                </div>
                {uploading && uploadProgress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Uploading...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} />
                  </div>
                )}
                <div className="flex justify-end gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsUploadDialogOpen(false);
                      resetUploadForm();
                    }}
                    disabled={uploading}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={uploading || !selectedFile}>
                    {uploading ? 'Uploading...' : 'Upload File'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Storage Stats */}
        <Card className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <HardDrive className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900">Storage Usage</p>
                  <p className="text-xs text-blue-700">
                    {files.length} files • {formatFileSize(files.reduce((acc, file) => acc + file.fileSize, 0))} used
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {files.length} files
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Files Grid */}
        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredFiles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredFiles.map((file) => (
              <Card key={file._id} className="group hover:shadow-lg transition-all duration-200 hover:scale-[1.02] bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="text-2xl">{getFileIcon(file.mimeType)}</div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-semibold text-gray-900 truncate">
                          {file.originalName}
                        </CardTitle>
                        <CardDescription>
                          {formatFileSize(file.fileSize)} • {file.mimeType.split('/')[1]?.toUpperCase() || 'FILE'}
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(file._id)}
                      className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {file.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {file.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(file.uploadedAt).toLocaleDateString()}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="h-8"
                    >
                      <a
                        href={file.fileUrl}
                        download={file.originalName}
                        className="flex items-center"
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {searchTerm ? 'No files found' : 'No files uploaded yet'}
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm
                  ? 'Try adjusting your search criteria'
                  : 'Start building your collection of development files'}
              </p>
              {!searchTerm && (
                <Button onClick={() => setIsUploadDialogOpen(true)}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Your First File
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </ProtectedRoute>
  );
}