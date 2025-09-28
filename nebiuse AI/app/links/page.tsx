'use client';

import { useState, useEffect } from 'react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link as LinkIcon, Plus, Search, Edit, Trash2, ExternalLink, Tag, Calendar } from 'lucide-react';
import { toast } from 'sonner';

interface Link {
  _id: string;
  title: string;
  url: string;
  description?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export default function LinksPage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingLink, setEditingLink] = useState<Link | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    tags: '',
  });

  useEffect(() => {
    fetchLinks();
  }, []);

  useEffect(() => {
    filterLinks();
  }, [links, searchTerm, selectedTag]);

  const fetchLinks = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch('/api/links', {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setLinks(data.links);
        
        // Extract all unique tags
        const tags = new Set<string>();
        data.links.forEach((link: Link) => {
          link.tags.forEach(tag => tags.add(tag));
        });
        setAllTags(Array.from(tags).sort());
      }
    } catch (error) {
      console.error('Error fetching links:', error);
      toast.error('Failed to fetch links');
    } finally {
      setLoading(false);
    }
  };

  const filterLinks = () => {
    let filtered = links;

    if (searchTerm) {
      filtered = filtered.filter(link =>
        link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.url.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTag) {
      filtered = filtered.filter(link => link.tags.includes(selectedTag));
    }

    setFilteredLinks(filtered);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.url) {
      toast.error('Title and URL are required');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const tags = formData.tags
        .split(',')
        .map(tag => tag.trim().toLowerCase())
        .filter(tag => tag.length > 0);

      const linkData = {
        title: formData.title,
        url: formData.url,
        description: formData.description,
        tags,
      };

      const response = await fetch(
        editingLink ? `/api/links/${editingLink._id}` : '/api/links',
        {
          method: editingLink ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(linkData),
        }
      );

      if (response.ok) {
        toast.success(editingLink ? 'Link updated successfully!' : 'Link added successfully!');
        setIsAddDialogOpen(false);
        setEditingLink(null);
        resetForm();
        fetchLinks();
      } else {
        const error = await response.json();
        toast.error(error.error || 'Failed to save link');
      }
    } catch (error) {
      console.error('Error saving link:', error);
      toast.error('Failed to save link');
    }
  };

  const handleEdit = (link: Link) => {
    setEditingLink(link);
    setFormData({
      title: link.title,
      url: link.url,
      description: link.description || '',
      tags: link.tags.join(', '),
    });
    setIsAddDialogOpen(true);
  };

  const handleDelete = async (linkId: string) => {
    if (!confirm('Are you sure you want to delete this link?')) return;

    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch(`/api/links/${linkId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        toast.success('Link deleted successfully!');
        fetchLinks();
      } else {
        toast.error('Failed to delete link');
      }
    } catch (error) {
      console.error('Error deleting link:', error);
      toast.error('Failed to delete link');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      url: '',
      description: '',
      tags: '',
    });
  };

  const closeDialog = () => {
    setIsAddDialogOpen(false);
    setEditingLink(null);
    resetForm();
  };

  return (
    <ProtectedRoute>
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Development Links</h1>
            <p className="mt-2 text-gray-600">Manage your saved development resources</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Plus className="h-4 w-4 mr-2" />
                Add Link
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>{editingLink ? 'Edit Link' : 'Add New Link'}</DialogTitle>
                <DialogDescription>
                  {editingLink ? 'Update your development link' : 'Save a new development resource'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., React Documentation"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="url">URL *</Label>
                  <Input
                    id="url"
                    type="url"
                    value={formData.url}
                    onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
                    placeholder="https://example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of this resource"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                    placeholder="react, javascript, documentation (comma-separated)"
                  />
                  <p className="text-sm text-gray-500">Separate tags with commas</p>
                </div>
                <div className="flex justify-end gap-3">
                  <Button type="button" variant="outline" onClick={closeDialog}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingLink ? 'Update Link' : 'Add Link'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search links..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All tags</SelectItem>
              {allTags.map(tag => (
                <SelectItem key={tag} value={tag}>{tag}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Links Grid */}
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
        ) : filteredLinks.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredLinks.map((link) => (
              <Card key={link._id} className="group hover:shadow-lg transition-all duration-200 hover:scale-[1.02] bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                        {link.title}
                      </CardTitle>
                      <CardDescription className="truncate">
                        {link.url}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 ml-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(link)}
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(link._id)}
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {link.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {link.description}
                    </p>
                  )}
                  
                  {link.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {link.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {link.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{link.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(link.createdAt).toLocaleDateString()}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="h-8"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Visit
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
              <LinkIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {searchTerm || selectedTag ? 'No links found' : 'No links saved yet'}
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || selectedTag
                  ? 'Try adjusting your search criteria'
                  : 'Start building your collection of development resources'}
              </p>
              {!searchTerm && !selectedTag && (
                <Button onClick={() => setIsAddDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Link
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </ProtectedRoute>
  );
}