
import { Article } from '@/types';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const categoryColorClasses = {
    politics: 'border-category-politics text-category-politics',
    business: 'border-category-business text-category-business',
    science: 'border-category-science text-category-science',
  };

  return (
    <Link 
      to={`/article/${article.id}`}
      className="block group"
    >
      <div 
        className={`bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden h-full border-l-4 flex flex-col ${categoryColorClasses[article.category]}`}
      >
        <div className="p-5 flex flex-col flex-grow">
          <div 
            className={`mb-2 text-sm uppercase font-medium tracking-wider ${categoryColorClasses[article.category]}`}
          >
            {article.category}
          </div>
          
          <h3 className="font-playfair text-xl font-bold mb-2 group-hover:underline decoration-gray-300">
            {article.title}
          </h3>
          
          <p className="text-gray-600 font-serif mb-4 flex-grow">
            {article.snippet}
          </p>
          
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{article.author}</span>
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
