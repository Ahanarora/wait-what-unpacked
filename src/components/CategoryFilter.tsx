
import { useState } from 'react';
import { Category } from '@/types';

interface CategoryFilterProps {
  activeCategory: Category | 'all';
  onSelectCategory: (category: Category | 'all') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  activeCategory, 
  onSelectCategory 
}) => {
  const categories: Array<{ value: Category | 'all'; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'politics', label: 'Politics' },
    { value: 'business', label: 'Business' },
    { value: 'science', label: 'Science' },
  ];

  const getCategoryClasses = (category: Category | 'all') => {
    const baseClasses = "py-2 px-4 font-medium rounded-md transition-colors duration-200";
    
    if (category === activeCategory) {
      switch (category) {
        case 'politics':
          return `${baseClasses} bg-category-politics text-white`;
        case 'business':
          return `${baseClasses} bg-category-business text-white`;
        case 'science':
          return `${baseClasses} bg-category-science text-white`;
        default:
          return `${baseClasses} bg-gray-800 text-white`;
      }
    }
    
    return `${baseClasses} bg-white text-gray-700 hover:bg-gray-100`;
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onSelectCategory(category.value)}
          className={getCategoryClasses(category.value)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
