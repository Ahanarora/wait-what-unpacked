
import { themes } from '@/data/themes';
import { Theme } from '@/types';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const ThemesPage = () => {
  const getCategoryColorClass = (category: Theme['category']) => {
    switch (category) {
      case 'politics':
        return 'bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700';
      case 'business':
        return 'bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-700';
      case 'science':
        return 'bg-gradient-to-r from-purple-500/10 to-purple-600/10 text-purple-700';
      default:
        return 'bg-gradient-to-r from-gray-500/10 to-gray-600/10 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Major Themes</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Articles</Link>
        </div>
        
        <div className="space-y-6">
          {themes.map((theme) => (
            <Accordion
              key={theme.id}
              type="single"
              collapsible
              className="rounded-xl overflow-hidden shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <AccordionItem value={theme.id} className="border-none">
                <AccordionTrigger 
                  className={cn(
                    "px-6 py-4 hover:no-underline",
                    getCategoryColorClass(theme.category)
                  )}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-lg overflow-hidden shadow-md">
                      <img
                        src={theme.events[0]?.imageUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"}
                        alt={theme.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <span className="text-sm font-medium uppercase tracking-wider mb-1">
                        {theme.category}
                      </span>
                      <h2 className="text-2xl font-bold mb-2">{theme.title}</h2>
                      <p className="text-sm opacity-90">{theme.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 bg-white">
                  <div className="space-y-6 mt-4">
                    {theme.events.map((event, index) => (
                      <div key={event.id} className="flex gap-6">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-lg overflow-hidden shadow-md">
                            <img
                              src={event.imageUrl}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {index < theme.events.length - 1 && (
                            <div className="absolute top-24 left-12 w-px h-[2rem] bg-gray-200" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-gray-500">{event.date}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          {event.articleId && (
                            <Link
                              to={`/article/${event.articleId}`}
                              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                            >
                              Read full article →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemesPage;
