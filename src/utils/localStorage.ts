
import { SessionItem } from '@/types';

const STORAGE_KEY = 'wait-what-sessions';

export const saveSession = (session: SessionItem): void => {
  try {
    const existingSessions = getSessions();
    const updatedSessions = [session, ...existingSessions];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSessions));
  } catch (error) {
    console.error('Error saving session to localStorage:', error);
  }
};

export const getSessions = (): SessionItem[] => {
  try {
    const sessions = localStorage.getItem(STORAGE_KEY);
    return sessions ? JSON.parse(sessions) : [];
  } catch (error) {
    console.error('Error retrieving sessions from localStorage:', error);
    return [];
  }
};

export const getSessionsByArticleId = (articleId: string): SessionItem[] => {
  try {
    const allSessions = getSessions();
    return allSessions.filter(session => session.articleId === articleId);
  } catch (error) {
    console.error('Error filtering sessions by article ID:', error);
    return [];
  }
};

export const clearSessions = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing sessions from localStorage:', error);
  }
};
