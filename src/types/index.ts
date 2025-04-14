
export type Category = 'politics' | 'business' | 'science';

export type Article = {
  id: string;
  title: string;
  snippet: string;
  content: string;
  category: Category;
  date: string;
  author: string;
};

export type Question = {
  id: string;
  text: string;
  level: 'basic' | 'intermediate' | 'advanced';
};

export type QuestionLevel = 'basic' | 'intermediate' | 'advanced';

export type SessionItem = {
  articleId: string;
  articleTitle: string;
  question: string;
  answer: string;
  timestamp: number;
  highlightedText?: string;
};
