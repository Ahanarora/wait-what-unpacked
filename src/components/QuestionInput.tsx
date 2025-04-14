
import { useState } from 'react';

interface QuestionInputProps {
  onAskQuestion: (question: string) => void;
  isLoading: boolean;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ onAskQuestion, isLoading }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onAskQuestion(question.trim());
      setQuestion('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm">
        <textarea
          className="w-full p-3 focus:outline-none resize-none font-serif"
          placeholder="Ask a question about this article..."
          rows={3}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="flex justify-end bg-gray-50 p-2 border-t border-gray-200">
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className={`py-2 px-4 rounded-md font-medium ${
              isLoading || !question.trim()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isLoading ? 'Thinking...' : 'Ask'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default QuestionInput;
