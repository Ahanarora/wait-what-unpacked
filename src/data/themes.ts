
import { Theme } from '@/types';

export const themes: Theme[] = [
  {
    id: 'trump-tariffs',
    title: 'Trump Tariffs and Trade Wars',
    description: 'Timeline of trade policies and their global impact',
    category: 'politics',
    events: [
      {
        id: 'tariff-1',
        date: '2025-03-15',
        title: 'New Steel Tariffs Announced',
        description: 'Former President Trump announces new steel tariffs affecting global trade.',
        articleId: 'politics-1',
        imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
      },
      {
        id: 'tariff-2',
        date: '2025-03-20',
        title: 'Global Markets React',
        description: 'International markets show significant volatility in response to tariff announcements.',
        articleId: 'business-2',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
      }
    ]
  },
  {
    id: 'russia-ukraine',
    title: 'Russia-Ukraine Conflict',
    description: 'Major developments in the ongoing conflict',
    category: 'politics',
    events: [
      {
        id: 'ru-1',
        date: '2025-04-01',
        title: 'Peace Talks Resume',
        description: 'New round of peace negotiations begins in Geneva.',
        articleId: 'politics-2',
        imageUrl: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e'
      }
    ]
  },
  {
    id: 'ai-developments',
    title: 'Developments in AI',
    description: 'Breakthrough moments in artificial intelligence',
    category: 'science',
    events: [
      {
        id: 'ai-1',
        date: '2025-04-10',
        title: 'Quantum AI Breakthrough',
        description: 'Scientists achieve new milestone in quantum computing applications for AI.',
        articleId: 'science-1',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
      }
    ]
  }
];

export const getThemeById = (id: string): Theme | undefined => {
  return themes.find(theme => theme.id === id);
};
