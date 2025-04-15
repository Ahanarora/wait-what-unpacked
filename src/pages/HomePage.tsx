
import { useState } from 'react';
import { Article, Category } from '@/types';
import { getArticlesByCategory } from '@/data/articles';
import Header from '@/components/Header';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import TimeFilter from '@/components/TimeFilter';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GalleryHorizontal, ArrowRight } from 'lucide-react';

type TimeRange = 'daily' | 'weekly' | 'monthly';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [activeTimeRange, setActiveTimeRange] = useState<TimeRange>('daily');
  const articles = getArticlesByCategory(activeCategory, activeTimeRange);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1">
            <TimeFilter 
              activeTimeRange={activeTimeRange} 
              onSelectTimeRange={setActiveTimeRange}
            />
            {activeTimeRange === 'weekly' && (
              <div className="flex items-center gap-2 text-sm text-blue-600 mt-2">
                <ArrowRight className="h-4 w-4" />
                <span className="italic">recommended for us common folk</span>
              </div>
            )}
          </div>
          <Button asChild variant="outline">
            <Link to="/themes" className="flex items-center gap-2">
              <GalleryHorizontal className="h-4 w-4" />
              Track Stories Chronologically
            </Link>
          </Button>
        </div>
        
        <CategoryFilter 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
