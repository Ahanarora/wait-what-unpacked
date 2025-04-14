
import { useState } from 'react';
import { Article, Category } from '@/types';
import { getArticlesByCategory } from '@/data/articles';
import Header from '@/components/Header';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const articles = getArticlesByCategory(activeCategory);

  const handleCategorySelect = (category: Category | 'all') => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <CategoryFilter 
          activeCategory={activeCategory} 
          onSelectCategory={handleCategorySelect} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
