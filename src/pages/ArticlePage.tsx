
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleById } from '@/data/articles';
import { askQuestion } from '@/utils/openrouter';
import { saveSession, getSessionsByArticleId } from '@/utils/localStorage';
import { SessionItem } from '@/types';
import Header from '@/components/Header';
import QuestionInput from '@/components/QuestionInput';
import ResponseDisplay from '@/components/ResponseDisplay';
import SuggestedQuestions from '@/components/SuggestedQuestions';
import TextHighlight from '@/components/TextHighlight';
import SessionHistory from '@/components/SessionHistory';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(id ? getArticleById(id) : null);
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sessions, setSessions] = useState<SessionItem[]>([]);
  const [currentSession, setCurrentSession] = useState<SessionItem | null>(null);
  
  useEffect(() => {
    if (id) {
      setArticle(getArticleById(id));
      const articleSessions = getSessionsByArticleId(id);
      setSessions(articleSessions);
    }
  }, [id]);

  const handleAskQuestion = async (question: string, highlightedText?: string) => {
    if (!article) return;
    
    setIsLoading(true);
    setResponse(null);
    
    try {
      // Context is either the whole article or highlighted text with surrounding context
      const context = highlightedText || article.content;
      
      const answer = await askQuestion(question, context);
      setResponse(answer);
      
      // Save session
      const newSession: SessionItem = {
        articleId: article.id,
        articleTitle: article.title,
        question,
        answer,
        timestamp: Date.now(),
        highlightedText
      };
      
      saveSession(newSession);
      setSessions(prev => [newSession, ...prev]);
    } catch (error) {
      console.error('Error asking question:', error);
      setResponse('Sorry, there was an error processing your question. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAskAboutHighlight = (text: string, question: string) => {
    handleAskQuestion(`${question} "${text}"`, text);
  };

  const handleSelectSession = (session: SessionItem) => {
    setCurrentSession(session);
    setResponse(session.answer);
  };

  const getCategoryColorClass = (category: string) => {
    switch (category) {
      case 'politics': return 'text-category-politics';
      case 'business': return 'text-category-business';
      case 'science': return 'text-category-science';
      default: return 'text-gray-600';
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <div className="lg:w-2/3">
            <Link 
              to="/" 
              className="inline-block mb-4 text-sm text-gray-600 hover:text-gray-900"
            >
              ← Back to articles
            </Link>
            
            <span 
              className={`inline-block mb-3 text-sm font-medium uppercase tracking-wider ${getCategoryColorClass(article.category)}`}
            >
              {article.category}
            </span>
            
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
              <span>By {article.author}</span>
              <span>{article.date}</span>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div
                id="article-content"
                className="font-sourceSerif text-lg leading-relaxed prose max-w-none"
              >
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar with Q&A */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
              <h2 className="font-playfair text-xl font-bold mb-4">
                Ask About This Article
              </h2>

              {/* Session History */}
              <SessionHistory 
                sessions={sessions} 
                onSelectSession={handleSelectSession} 
              />
              
              {/* Question Input */}
              <QuestionInput 
                onAskQuestion={(q) => handleAskQuestion(q)}
                isLoading={isLoading} 
              />
              
              {/* Response Display */}
              <ResponseDisplay 
                response={response} 
                isLoading={isLoading} 
              />
              
              {/* If showing a past session */}
              {currentSession && response && (
                <div className="mt-4 text-sm text-gray-500">
                  {currentSession.highlightedText && (
                    <div className="p-3 bg-gray-100 rounded-md mb-2 italic">
                      "{currentSession.highlightedText}"
                    </div>
                  )}
                  <div>Asked at {new Date(currentSession.timestamp).toLocaleString()}</div>
                </div>
              )}
              
              {/* Suggested Questions */}
              <SuggestedQuestions onSelectQuestion={(q) => handleAskQuestion(q)} />
            </div>
          </div>
        </div>
      </main>
      
      {/* Text Highlight Component */}
      <TextHighlight onAskAboutHighlight={handleAskAboutHighlight} />
    </div>
  );
};

export default ArticlePage;
