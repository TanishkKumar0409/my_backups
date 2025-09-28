import React from "react";
import { motion } from "framer-motion";
import { LuX, LuSearch } from "react-icons/lu";

interface ActiveFiltersProps {
  searchTerm: string;
  selectedCategories: string[];
  selectedTags: string[];
  onRemoveSearch: () => void;
  onRemoveCategory: (category: string) => void;
  onRemoveTag: (tag: string) => void;
  onClearAll: () => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  searchTerm,
  selectedCategories,
  selectedTags,
  onRemoveSearch,
  onRemoveCategory,
  onRemoveTag,
  onClearAll,
}) => {
  const hasActiveFilters =
    searchTerm || selectedCategories.length > 0 || selectedTags.length > 0;

  if (!hasActiveFilters) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-700">Active Filters</h3>
        <button
          onClick={onClearAll}
          className="text-xs text-red-600 hover:text-red-700 font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {/* Search Term */}
        {searchTerm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            <LuSearch className="w-3 h-3" />
            <span>"{searchTerm}"</span>
            <button
              onClick={onRemoveSearch}
              className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
            >
              <LuX className="w-3 h-3" />
            </button>
          </motion.div>
        )}

        {/* Categories */}
        {selectedCategories.map((category) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-1 bg-violet-50 text-violet-700 px-3 py-1 rounded-full text-sm"
          >
            <span>{category}</span>
            <button
              onClick={() => onRemoveCategory(category)}
              className="ml-1 hover:bg-violet-200 rounded-full p-0.5"
            >
              <LuX className="w-3 h-3" />
            </button>
          </motion.div>
        ))}

        {/* Tags */}
        {selectedTags.map((tag) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-1 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
          >
            <span>{tag}</span>
            <button
              onClick={() => onRemoveTag(tag)}
              className="ml-1 hover:bg-indigo-200 rounded-full p-0.5"
            >
              <LuX className="w-3 h-3" />
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ActiveFilters;
