
import { useState } from 'react';
import { Question, QuestionLevel } from '@/types';
import { getQuestionsByLevel } from '@/data/questions';

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
}

const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({ onSelectQuestion }) => {
  const [activeLevel, setActiveLevel] = useState<QuestionLevel>('basic');
  const questions = getQuestionsByLevel(activeLevel);

  const levelOptions: Array<{ value: QuestionLevel; label: string }> = [
    { value: 'basic', label: 'Basic' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  return (
    <div className="mb-8">
      <h3 className="font-playfair text-lg mb-3">Suggested Questions</h3>
      
      <div className="flex gap-2 mb-4">
        {levelOptions.map((level) => (
          <button
            key={level.value}
            onClick={() => setActiveLevel(level.value)}
            className={`px-3 py-1 text-sm rounded-md ${
              activeLevel === level.value
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {level.label}
          </button>
        ))}
      </div>
      
      <div className="space-y-2">
        {questions.map((question) => (
          <button
            key={question.id}
            onClick={() => onSelectQuestion(question.text)}
            className="w-full text-left p-2 hover:bg-gray-100 rounded-md transition-colors duration-150 text-gray-700 font-serif"
          >
            {question.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
