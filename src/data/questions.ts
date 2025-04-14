
import { Question } from '@/types';

export const suggestedQuestions: Record<string, Question[]> = {
  basic: [
    { id: 'basic-1', text: 'Can you summarize this article in simpler terms?', level: 'basic' },
    { id: 'basic-2', text: 'What are the main points of this article?', level: 'basic' },
    { id: 'basic-3', text: 'Who are the key people mentioned in this article?', level: 'basic' },
    { id: 'basic-4', text: 'What is the most important takeaway from this article?', level: 'basic' },
    { id: 'basic-5', text: 'Why is this topic important?', level: 'basic' },
  ],
  intermediate: [
    { id: 'int-1', text: 'How does this compare to similar situations in the past?', level: 'intermediate' },
    { id: 'int-2', text: 'What are the potential implications of these findings?', level: 'intermediate' },
    { id: 'int-3', text: 'Can you explain the methodology used in this research?', level: 'intermediate' },
    { id: 'int-4', text: 'What counterarguments exist to the main thesis?', level: 'intermediate' },
    { id: 'int-5', text: 'How might this affect related industries or fields?', level: 'intermediate' },
  ],
  advanced: [
    { id: 'adv-1', text: 'What are the theoretical frameworks underlying this research?', level: 'advanced' },
    { id: 'adv-2', text: 'How might this integrate with other cutting-edge developments in the field?', level: 'advanced' },
    { id: 'adv-3', text: 'What are the potential second and third-order effects of these findings?', level: 'advanced' },
    { id: 'adv-4', text: 'Can you analyze the statistical significance of the key claims?', level: 'advanced' },
    { id: 'adv-5', text: 'What epistemological assumptions underpin this approach?', level: 'advanced' },
  ]
};

export const highlightQuestions = [
  { id: 'highlight-1', text: 'Can you explain this simply?' },
  { id: 'highlight-2', text: 'What does this mean?' },
  { id: 'highlight-3', text: 'Why is this important?' },
];

export const getQuestionsByLevel = (level: 'basic' | 'intermediate' | 'advanced'): Question[] => {
  return suggestedQuestions[level] || [];
};
