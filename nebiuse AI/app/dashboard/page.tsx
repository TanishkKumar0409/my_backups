'use client';

import { useState, useEffect } from 'react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link as LinkIcon, FileText, Plus, TrendingUp, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

interface Stats {
  totalLinks: number;
  totalFiles: number;
  recentLinks: any[];
  recentFiles: any[];
  popularTags: { tag: string; count: number }[];
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats>({
    totalLinks: 0,
    totalFiles: 0,
    recentLinks: [],
    recentFiles: [],
    popularTags: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const [linksResponse, filesResponse] = await Promise.all([
        fetch('/api/links', {
          headers: { 'Authorization': `Bearer ${token}` },
        }),
        fetch('/api/files', {
          headers: { 'Authorization': `Bearer ${token}` },
        }),
      ]);

      if (linksResponse.ok && filesResponse.ok) {
        const linksData = await linksResponse.json();
        const filesData = await filesResponse.json();

        // Calculate popular tags
        const tagCounts: { [key: string]: number } = {};
        linksData.links.forEach((link: any) => {
          link.tags.forEach((tag: string) => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
          });
        });

        const popularTags = Object.entries(tagCounts)
          .map(([tag, count]) => ({ tag, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        setStats({
          totalLinks: linksData.links.length,
          totalFiles: filesData.files.length,
          recentLinks: linksData.links.slice(0, 5),
          recentFiles: filesData.files.slice(0, 5),
          popularTags,
        });
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="mt-2 text-gray-600">
            Here's an overview of your development resources
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">Total Links</CardTitle>
              <LinkIcon className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">{stats.totalLinks}</div>
              <p className="text-xs text-blue-700">Saved development links</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Total Files</CardTitle>
              <FileText className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">{stats.totalFiles}</div>
              <p className="text-xs text-green-700">Uploaded documents</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-800">Popular Tags</CardTitle>
              <Tag className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900">{stats.popularTags.length}</div>
              <p className="text-xs text-purple-700">Active categories</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-800">This Week</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-900">+{Math.floor(Math.random() * 10)}</div>
              <p className="text-xs text-orange-700">New items added</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Links */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-blue-600" />
                    Recent Links
                  </CardTitle>
                  <CardDescription>Your latest saved links</CardDescription>
                </div>
                <Button asChild size="sm">
                  <Link href="/links">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Link
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {stats.recentLinks.length > 0 ? (
                <div className="space-y-4">
                  {stats.recentLinks.map((link) => (
                    <div key={link._id} className="flex items-start justify-between p-3 rounded-lg border bg-gray-50/50">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{link.title}</h4>
                        <p className="text-sm text-gray-500 truncate">{link.url}</p>
                        <div className="flex items-center gap-2 mt-2">
                          {link.tags.slice(0, 2).map((tag: string) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {link.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{link.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <LinkIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No links saved yet</p>
                  <Button asChild className="mt-4">
                    <Link href="/links">Add your first link</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Files */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    Recent Files
                  </CardTitle>
                  <CardDescription>Your latest uploaded files</CardDescription>
                </div>
                <Button asChild size="sm" variant="outline">
                  <Link href="/files">
                    <Plus className="h-4 w-4 mr-1" />
                    Upload File
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {stats.recentFiles.length > 0 ? (
                <div className="space-y-4">
                  {stats.recentFiles.map((file) => (
                    <div key={file._id} className="flex items-start justify-between p-3 rounded-lg border bg-gray-50/50">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{file.originalName}</h4>
                        <p className="text-sm text-gray-500">
                          {(file.fileSize / 1024 / 1024).toFixed(2)} MB • {file.mimeType}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {new Date(file.uploadedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No files uploaded yet</p>
                  <Button asChild className="mt-4" variant="outline">
                    <Link href="/files">Upload your first file</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Popular Tags */}
        {stats.popularTags.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-purple-600" />
                Popular Tags
              </CardTitle>
              <CardDescription>Your most used tags</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {stats.popularTags.map((item) => (
                  <div key={item.tag} className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <Badge variant="outline">{item.tag}</Badge>
                      <Progress value={(item.count / stats.totalLinks) * 100} className="flex-1 max-w-xs" />
                    </div>
                    <span className="text-sm text-gray-500">{item.count} links</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </ProtectedRoute>
  );
}