import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { LuBookOpen, LuFilter, LuSearch } from "react-icons/lu";
import PageBanner from "../../Components/PageBanner/PageBanner";
import BlogFilters from "./BlogsComponents/BlogFilters";
import ActiveFilters from "./BlogsComponents/ActiveFilters";
import blogs from "../../Data/Blogs.json";
import FeaturedBlogCard from "./BlogsComponents/FeaturedBlogCard";
import BlogCard from "./BlogsComponents/BlogCard";
import Pagination from "./BlogsComponents/Pagination";
const BLOGS_PER_PAGE = 12;

const BlogListingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    blogs.forEach((post) => {
      post.category.forEach((cat) => categories.add(cat));
    });
    return Array.from(categories).sort();
  }, []);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    blogs.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter blogs based on search and filters
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategories =
        selectedCategories.length === 0 ||
        selectedCategories.some((cat) => blog.category.includes(cat));
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => blog.tags.includes(tag));

      return matchesSearch && matchesCategories && matchesTags;
    });
  }, [searchTerm, selectedCategories, selectedTags]);

  // Get featured blog and regular blogs
  const featuredBlog = filteredBlogs.find((blog) => blog.featured);
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured);

  // Pagination
  const totalPages = Math.ceil(regularBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = regularBlogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedTags([]);
    setCurrentPage(1);
  };

  const removeSearchTerm = () => setSearchTerm("");
  const removeCategory = (category: string) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };
  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategories, selectedTags]);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div className="min-h-screen">
      <PageBanner
        title="Our Blog"
        subtitle="Discover insights, tips, and expert advice on health, wellness, and personal growth. Stay informed with our latest articles and research-backed content."
        icon={<LuBookOpen />}
        image="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <LuSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full sm:w-80 pl-12 pr-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200 text-gray-900 placeholder-gray-400 shadow-xs"
                />
              </div>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center space-x-2 px-4 py-3 bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-xs whitespace-nowrap"
            >
              <LuFilter className="w-5 h-5" />
              <span>Filters</span>
              {(selectedCategories.length > 0 || selectedTags.length > 0) && (
                <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-medium">
                  {selectedCategories.length + selectedTags.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Offcanvas Filters */}
        <BlogFilters
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          availableCategories={availableCategories}
          availableTags={availableTags}
          clearAllFilters={clearAllFilters}
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />

        {/* Active Filters */}
        <ActiveFilters
          searchTerm={searchTerm}
          selectedCategories={selectedCategories}
          selectedTags={selectedTags}
          onRemoveSearch={removeSearchTerm}
          onRemoveCategory={removeCategory}
          onRemoveTag={removeTag}
          onClearAll={clearAllFilters}
        />

        {/* Main Content */}
        <div>
          {filteredBlogs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <LuBookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters to find what you're
                looking for.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </motion.div>
          ) : (
            <>
              {/* Featured Blog */}
              {featuredBlog && (
                <div className="mb-12">
                  <FeaturedBlogCard blog={featuredBlog} />
                </div>
              )}

              {/* Regular Blogs Grid */}
              {paginatedBlogs.length > 0 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {paginatedBlogs.map((blog, index) => (
                      <motion.div
                        key={blog._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <BlogCard blog={blog} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogListingPage;
