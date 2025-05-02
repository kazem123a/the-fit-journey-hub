
import { Article } from './types';
import { articles } from './articlesList';
import { articleContent } from './articleContents';

// Helper function to get all articles
export const getAllArticles = (): Article[] => {
  return articles;
};

// Helper function to get article by ID
export const getArticleById = (id: number): Article | undefined => {
  return articles.find(article => article.id === id);
};

// Helper function to get article content by ID
export const getArticleContentById = (id: number): string => {
  return articleContent[id] || '<p>محتوى المقال غير متوفر</p>';
};

// Helper function to filter articles by category
export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

// Helper function to search articles
export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) || 
    article.excerpt.toLowerCase().includes(lowercaseQuery)
  );
};
