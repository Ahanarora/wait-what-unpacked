
import { useState, useMemo } from 'react';
import { SessionItem } from '@/types';
import { ChevronDown, ChevronRight, Circle, MessageSquare } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface SessionHistoryProps {
  sessions: SessionItem[];
  onSelectSession: (session: SessionItem) => void;
}

interface TreeNode {
  session: SessionItem;
  children: TreeNode[];
  level: number;
}

const SessionHistory: React.FC<SessionHistoryProps> = ({ 
  sessions, 
  onSelectSession 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTreeView, setShowTreeView] = useState(false);

  if (sessions.length === 0) {
    return null;
  }

  // Process sessions to create tree structure
  const buildQuestionTree = useMemo(() => {
    // First, ensure all sessions have unique IDs
    const sessionsWithIds = sessions.map(session => {
      if (!session.id) {
        return { 
          ...session, 
          id: `q-${session.timestamp}` 
        };
      }
      return session;
    });

    // Create a map for quick lookups
    const nodeMap = new Map<string, TreeNode>();
    
    // Initialize all nodes
    sessionsWithIds.forEach(session => {
      nodeMap.set(session.id, {
        session,
        children: [],
        level: 0
      });
    });
    
    const rootNodes: TreeNode[] = [];
    
    // Build the tree structure
    sessionsWithIds.forEach(session => {
      const node = nodeMap.get(session.id);
      if (!node) return;
      
      if (session.parentId && nodeMap.get(session.parentId)) {
        // This is a follow-up question, add it to its parent
        const parentNode = nodeMap.get(session.parentId);
        if (parentNode) {
          node.level = parentNode.level + 1;
          parentNode.children.push(node);
        }
      } else {
        // This is a root question
        rootNodes.push(node);
      }
    });
    
    // Sort nodes by timestamp
    const sortNodes = (nodes: TreeNode[]) => {
      nodes.sort((a, b) => b.session.timestamp - a.session.timestamp);
      nodes.forEach(node => {
        sortNodes(node.children);
      });
    };
    
    sortNodes(rootNodes);
    return rootNodes;
  }, [sessions]);

  // Group sessions by article for the list view
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

  // Render a single node in the tree
  const renderTreeNode = (node: TreeNode, index: number) => (
    <div
      key={node.session.id || index}
      className="ml-4 relative"
      style={{ marginLeft: `${node.level * 1.5}rem` }}
    >
      <div className="flex items-start my-1">
        <div className="absolute left-0 top-0 h-full">
          {node.level > 0 && (
            <div className="absolute left-0 top-0 border-l border-gray-300 h-full" style={{ left: '-12px' }} />
          )}
          {node.children.length > 0 && (
            <div className="absolute border-l border-gray-300 h-full" style={{ left: '6px', top: '12px' }} />
          )}
        </div>
        
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-2">
              <Circle className="h-3 w-3 fill-gray-600 text-white cursor-pointer hover:fill-gray-800" />
              <div className="text-sm text-gray-800 truncate max-w-[250px]">
                {node.session.question.length > 35 ? 
                  `${node.session.question.substring(0, 35)}...` : 
                  node.session.question}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="p-3 max-w-sm shadow-md">
            <p className="font-medium mb-2">{node.session.question}</p>
            <div className="text-xs text-gray-500 mb-2">
              Asked at {formatTime(node.session.timestamp)}
            </div>
            <button
              onClick={() => onSelectSession(node.session)}
              className="text-sm bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-1 text-gray-700"
            >
              View Answer
            </button>
          </PopoverContent>
        </Popover>
      </div>
      
      {node.children.length > 0 && (
        <div className="ml-2 pl-2">
          {node.children.map((child, i) => renderTreeNode(child, i))}
        </div>
      )}
    </div>
  );

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
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-gray-700">Question History</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowTreeView(false)}
                className={`text-xs px-2 py-1 rounded-md ${!showTreeView ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                List
              </button>
              <button
                onClick={() => setShowTreeView(true)}
                className={`text-xs px-2 py-1 rounded-md ${showTreeView ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                Tree
              </button>
            </div>
          </div>
          
          {showTreeView ? (
            <div className="mt-3 space-y-2 pt-2">
              {buildQuestionTree.length > 0 ? (
                buildQuestionTree.map((node, index) => renderTreeNode(node, index))
              ) : (
                <div className="text-sm text-gray-500 text-center py-2">
                  No question relationships found
                </div>
              )}
            </div>
          ) : (
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
          )}
        </div>
      )}
    </div>
  );
};

export default SessionHistory;
