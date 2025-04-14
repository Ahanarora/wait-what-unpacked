
import { useState } from 'react';
import { SessionItem } from '@/types';

interface SessionHistoryProps {
  sessions: SessionItem[];
  onSelectSession: (session: SessionItem) => void;
}

const SessionHistory: React.FC<SessionHistoryProps> = ({ 
  sessions, 
  onSelectSession 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (sessions.length === 0) {
    return null;
  }

  // Group sessions by article
  const groupedSessions: Record<string, SessionItem[]> = {};
  sessions.forEach(session => {
    if (!groupedSessions[session.articleId]) {
      groupedSessions[session.articleId] = [];
    }
    groupedSessions[session.articleId].push(session);
  });

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString(undefined, { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 font-medium mb-2 text-gray-700 hover:text-gray-900"
      >
        <span className="material-symbols-outlined text-sm">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
        <span>Saved Questions ({sessions.length})</span>
      </button>

      {isOpen && (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-3 max-h-80 overflow-y-auto">
          <div className="space-y-4">
            {Object.entries(groupedSessions).map(([articleId, articleSessions]) => (
              <div key={articleId} className="border-b border-gray-200 last:border-0 pb-3">
                <h4 className="font-medium mb-2">
                  {articleSessions[0].articleTitle}
                </h4>
                <div className="space-y-2">
                  {articleSessions.map((session) => (
                    <button
                      key={session.timestamp}
                      onClick={() => onSelectSession(session)}
                      className="w-full text-left p-2 hover:bg-white rounded-md transition-colors duration-150 text-sm"
                    >
                      <div className="font-medium text-gray-800 truncate">
                        {session.question}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatTime(session.timestamp)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionHistory;
