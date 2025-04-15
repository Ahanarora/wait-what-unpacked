export type Category = 'politics' | 'business' | 'science';

export type Article = {
  id: string;
  title: string;
  snippet: string;
  content: string;
  category: Category;
  date: string;
  author: string;
  imageUrl?: string;
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
  parentId?: string; // ID of the parent question (if it's a follow-up)
  id: string; // Unique ID for this question
  isFollowUp?: boolean; // Whether this is a follow-up to another question
};

export type ThemeEvent = {
  id: string;
  date: string;
  title: string;
  description: string;
  articleId?: string; // Optional link to full article
  imageUrl: string;
};

export type Theme = {
  id: string;
  title: string;
  description: string;
  category: Category;
  events: ThemeEvent[];
};

