import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuX, LuFilter, LuSparkles, LuTag, LuGrid3X3 } from "react-icons/lu";

interface BlogFiltersProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  availableCategories: string[];
  availableTags: string[];
  clearAllFilters: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  selectedCategories,
  setSelectedCategories,
  selectedTags,
  setSelectedTags,
  availableCategories,
  availableTags,
  clearAllFilters,
  isOpen,
  onClose,
}) => {
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedTags.length > 0;

  return (
    <>
      {/* Enhanced Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40 backdrop-blur-sm z-100"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Modern Offcanvas Sidebar - Fixed Width and Overflow */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.4,
            }}
            className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl z-110 overflow-hidden"
          >
            <div className="relative h-full flex flex-col">
              {/* Enhanced Header */}
              <div className="flex-shrink-0 p-6 border-b border-gray-200/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl shadow-lg">
                      <LuFilter className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Smart Filters
                      </h3>
                      <p className="text-sm text-gray-500">
                        Refine your search
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
                  >
                    <LuX className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                  </motion.button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Enhanced Categories */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <LuGrid3X3 className="w-4 h-4 text-violet-600" />
                    <h4 className="text-sm font-semibold text-gray-700">
                      Categories
                    </h4>
                    {selectedCategories.length > 0 && (
                      <span className="bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full text-xs font-medium">
                        {selectedCategories.length}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                    {availableCategories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl shadow-xs hover:shadow-sm hover:shadow-indigo-100 backdrop-blur-sm transition-all duration-200 group"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryToggle(category)}
                            className="w-4 h-4 text-violet-600 border-2 border-gray-300 rounded focus:ring-violet-500 focus:ring-2 transition-all duration-200"
                          />
                          {selectedCategories.includes(category) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-1 -right-1 w-3 h-3 bg-violet-600 rounded-full flex items-center justify-center"
                            >
                              <LuSparkles className="w-2 h-2 text-white" />
                            </motion.div>
                          )}
                        </div>
                        <span className="text-sm text-gray-700 group-hover:text-indigo-700 font-medium truncate">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Enhanced Tags with Tag Shape */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <LuTag className="w-4 h-4 text-indigo-600" />
                    <h4 className="text-sm font-semibold text-gray-700">
                      Tags
                    </h4>
                    {selectedTags.length > 0 && (
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-medium">
                        {selectedTags.length}
                      </span>
                    )}
                  </div>
                  <div className="max-h-48 overflow-y-auto p-2 custom-scrollbar">
                    <div className="flex flex-wrap gap-2">
                      {availableTags.map((tag) => (
                        <motion.button
                          key={tag}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleTagToggle(tag)}
                          className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs transition-colors ${
                            selectedTags.includes(tag)
                              ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-transparent shadow-lg"
                              : "bg-indigo-50 text-gray-700 hover:bg-indigo-100"
                          }`}
                        >
                          {selectedTags.includes(tag) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center"
                            >
                              <LuSparkles className="w-1.5 h-1.5 text-yellow-800" />
                            </motion.div>
                          )}
                          <span className="relative z-10">{tag}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Clear All Filters - Fixed at Bottom */}
              {hasActiveFilters && (
                <div className="flex-shrink-0 p-6 border-t border-gray-200/50">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={clearAllFilters}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                  >
                    <LuX className="w-4 h-4" />
                    <span>Clear All Filters</span>
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogFilters;
