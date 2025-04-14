
import { useState, useEffect, useRef } from 'react';
import { highlightQuestions } from '@/data/questions';

interface TextHighlightProps {
  onAskAboutHighlight: (text: string, question: string) => void;
}

const TextHighlight: React.FC<TextHighlightProps> = ({ onAskAboutHighlight }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [highlightedText, setHighlightedText] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      
      if (!selection || selection.isCollapsed || !selection.toString().trim()) {
        setShowPopup(false);
        return;
      }

      const text = selection.toString().trim();
      if (text.length > 10) {
        setHighlightedText(text);
        
        // Position the popup near the selection
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        setPosition({
          x: rect.left + window.scrollX + (rect.width / 2),
          y: rect.bottom + window.scrollY + 10
        });
        
        setShowPopup(true);
      }
    };

    // Close popup when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleQuestionClick = (question: string) => {
    onAskAboutHighlight(highlightedText, question);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div 
      ref={popupRef}
      className="fixed bg-white shadow-lg rounded-lg p-3 z-50 border border-gray-200 w-72"
      style={{
        left: `${Math.min(position.x - 130, window.innerWidth - 300)}px`,
        top: `${position.y}px`
      }}
    >
      <div className="text-sm font-medium mb-2">Ask about the highlighted text:</div>
      <div className="space-y-1">
        {highlightQuestions.map((question) => (
          <button
            key={question.id}
            onClick={() => handleQuestionClick(question.text)}
            className="w-full text-left p-2 hover:bg-gray-100 rounded text-sm font-serif transition-colors"
          >
            {question.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TextHighlight;
