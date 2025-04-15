
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { themes } from '@/data/themes';
import { Theme } from '@/types';
import { ChevronDown, ChevronRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const ThemesPage = () => {
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null);

  const getCategoryColorClass = (category: Theme['category']) => {
    switch (category) {
      case 'politics':
        return 'text-blue-600';
      case 'business':
        return 'text-green-600';
      case 'science':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Major Themes</h1>
        <div className="space-y-6">
          {themes.map((theme) => (
            <Accordion
              key={theme.id}
              type="single"
              collapsible
              className="bg-white rounded-lg shadow-sm"
            >
              <AccordionItem value={theme.id} className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex flex-col items-start text-left">
                    <span className={cn("text-sm font-medium mb-1", getCategoryColorClass(theme.category))}>
                      {theme.category.toUpperCase()}
                    </span>
                    <h2 className="text-xl font-semibold">{theme.title}</h2>
                    <p className="text-gray-600 text-sm mt-1">{theme.description}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-6">
                    {theme.events.map((event, index) => (
                      <div key={event.id} className="flex gap-6">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-lg overflow-hidden">
                            <img
                              src={event.imageUrl}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {index < theme.events.length - 1 && (
                            <div className="absolute top-[5rem] left-[2.5rem] w-px h-[3.5rem] bg-gray-200" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-gray-500">{event.date}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                          <p className="text-gray-600 mb-2">{event.description}</p>
                          {event.articleId && (
                            <Link
                              to={`/article/${event.articleId}`}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
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
