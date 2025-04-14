
import { Article, Category } from '@/types';

const generateDummyContent = (category: Category): string => {
  const paragraphs = [
    "In a surprising turn of events, new research has emerged challenging conventional wisdom about how we understand the world around us. This revelation comes at a critical time when society is grappling with unprecedented changes on multiple fronts.",
    
    "Experts in the field have long debated the implications of such findings, with many arguing that a paradigm shift is not only inevitable but necessary for progress. \"We've been operating under assumptions that may no longer be valid in today's rapidly evolving landscape,\" says Dr. Maria Hernandez, lead researcher at the Institute for Advanced Studies.",
    
    "The data, collected over a five-year period, presents compelling evidence that cannot be easily dismissed. Multiple independent verification processes have confirmed the validity of these results, adding weight to what many initially considered controversial findings.",
    
    "Critics, however, remain skeptical. \"While the research methodology appears sound, we must be cautious about drawing sweeping conclusions,\" warns Professor James Wilson from the National Research Council. \"The sample size, though significant, may not represent the full spectrum of variables we need to consider.\"",
    
    "What makes these findings particularly relevant is their potential application across multiple domains. From policy-making to technological innovation, the implications could reshape fundamental approaches to problem-solving in the coming decade.",

    "The origin of this breakthrough can be traced back to an unlikely source. What began as a tangential observation in an unrelated study eventually led researchers down a path they hadn't anticipated. \"Sometimes the most significant discoveries happen when you're looking for something else entirely,\" notes Dr. Hernandez.",
    
    "Historical precedents suggest that such paradigm shifts often face initial resistance before gaining wider acceptance. Similar patterns occurred with many revolutionary ideas that we now take for granted, from heliocentrism to germ theory.",
    
    "Funding for further research remains a challenge, as traditional sources often favor more established lines of inquiry. Several private foundations have stepped forward, recognizing the potential long-term value of pursuing these unorthodox questions.",
    
    "Meanwhile, practical applications are already being developed in select pilot programs across the country. Early results suggest promising outcomes, though it's still too early to determine their scalability and sustainability over time.",
    
    "As we stand at this crossroads of understanding, one thing becomes increasingly clear: our willingness to question established paradigms may well determine our capacity to address the complex challenges of tomorrow. The coming years will reveal whether these findings represent a momentary deviation or the beginning of a new chapter in our collective knowledge."
  ];

  // Add category-specific paragraphs
  if (category === 'politics') {
    paragraphs.push(
      "Political analysts are particularly interested in how these findings might influence public policy decisions. \"The implications for governance are profound,\" says political scientist Dr. Rebecca Chen. \"We may need to rethink fundamental approaches to representation and decision-making in democratic systems.\"",
      
      "Several lawmakers have already cited the research in recent debates, suggesting a growing awareness of its relevance to current political discourse. Cross-party working groups have formed to explore potential legislative responses.",
      
      "Public opinion remains divided along familiar lines, with polls suggesting that prior ideological commitments strongly influence how individuals interpret the new data. This raises important questions about the relationship between empirical evidence and political belief systems."
    );
  } else if (category === 'business') {
    paragraphs.push(
      "Market reactions to these findings have been mixed, with some sectors experiencing significant volatility as investors attempt to price in the potential disruptions. \"We're seeing a fundamental reassessment of risk models across multiple industries,\" explains financial analyst Sarah Patel.",
      
      "Forward-thinking companies are already incorporating these insights into their strategic planning processes. \"Those who adapt quickly will likely gain significant competitive advantages,\" predicts business strategist Michael Rodriguez. \"The next five years will separate visionary organizations from those trapped in outdated paradigms.\"",
      
      "Workforce implications remain a particular concern, with questions about how these changes might affect employment patterns and skill requirements across various sectors. Education and training programs are scrambling to adjust curricula accordingly."
    );
  } else if (category === 'science') {
    paragraphs.push(
      "The scientific community has responded with an unprecedented wave of follow-up studies, seeking to extend and refine these initial findings. Collaborative research initiatives have formed across disciplines that rarely interact.",
      
      "Particularly exciting are the implications for quantum computing and materials science. \"We're seeing potential pathways to solving computational problems that were previously thought intractable,\" explains physicist Dr. Thomas Lin. \"The theoretical foundations are finally aligning with our experimental capabilities.\"",
      
      "Environmental scientists are especially interested in how these discoveries might inform climate change mitigation strategies. \"If these principles can be applied at scale, we might have additional tools for addressing atmospheric carbon levels,\" suggests climatologist Dr. Aisha Johnson."
    );
  }

  // Randomize paragraph order (except first and last)
  const middleParagraphs = paragraphs.slice(1, -1);
  const shuffled = middleParagraphs.sort(() => Math.random() - 0.5);
  return [paragraphs[0], ...shuffled, paragraphs[paragraphs.length - 1]].join("\n\n");
};

export const articles: Article[] = [
  {
    id: "politics-1",
    title: "Landmark Legislation Reshapes Regulatory Landscape",
    snippet: "New comprehensive bill introduces sweeping changes to how industries are regulated, with far-reaching implications for consumers and businesses alike.",
    content: generateDummyContent('politics'),
    category: 'politics',
    date: "2025-04-10",
    author: "Eleanor Richards"
  },
  {
    id: "politics-2",
    title: "International Summit Yields Unexpected Alliance",
    snippet: "Previously adversarial nations announce cooperative framework on climate initiatives, surprising diplomatic observers and potentially altering global power dynamics.",
    content: generateDummyContent('politics'),
    category: 'politics',
    date: "2025-04-08",
    author: "Thomas Zerinki"
  },
  {
    id: "politics-3",
    title: "Election Reform Bill Faces Uncertain Future",
    snippet: "Bipartisan support wavers as key provisions come under scrutiny from advocacy groups on both sides of the political spectrum.",
    content: generateDummyContent('politics'),
    category: 'politics',
    date: "2025-04-05",
    author: "Maria Gonzalez"
  },
  {
    id: "business-1",
    title: "Tech Giant Unveils Revolutionary AI Platform",
    snippet: "New artificial intelligence system promises to democratize advanced computing capabilities, potentially disrupting multiple industry sectors.",
    content: generateDummyContent('business'),
    category: 'business',
    date: "2025-04-12",
    author: "Jonathan Lee"
  },
  {
    id: "business-2",
    title: "Market Volatility Reaches Two-Year High",
    snippet: "Investors scramble to adjust portfolios as economic indicators send mixed signals about the direction of the global economy.",
    content: generateDummyContent('business'),
    category: 'business',
    date: "2025-04-09",
    author: "Sophia Chen"
  },
  {
    id: "business-3",
    title: "Sustainable Investment Funds See Record Inflows",
    snippet: "ESG-focused financial products attract unprecedented capital as investors increasingly prioritize environmental and social governance factors.",
    content: generateDummyContent('business'),
    category: 'business',
    date: "2025-04-07",
    author: "Marcus Williams"
  },
  {
    id: "science-1",
    title: "Breakthrough in Quantum Computing Achieves New Milestone",
    snippet: "Researchers demonstrate quantum advantage in solving previously intractable problems, bringing practical applications closer to reality.",
    content: generateDummyContent('science'),
    category: 'science',
    date: "2025-04-13",
    author: "Dr. Aisha Patel"
  },
  {
    id: "science-2",
    title: "Novel Material Could Revolutionize Energy Storage",
    snippet: "Laboratory tests show promising results for highly efficient, environmentally friendly battery technology with potential for rapid scaling.",
    content: generateDummyContent('science'),
    category: 'science',
    date: "2025-04-11",
    author: "Dr. Robert Kim"
  },
  {
    id: "science-3",
    title: "Climate Model Updates Reveal Accelerated Timeline",
    snippet: "Latest data analysis suggests environmental tipping points may be reached sooner than previously predicted, emphasizing urgency of mitigation efforts.",
    content: generateDummyContent('science'),
    category: 'science',
    date: "2025-04-06",
    author: "Dr. Helena Schmidt"
  }
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: Category | 'all'): Article[] => {
  if (category === 'all') return articles;
  return articles.filter(article => article.category === category);
};
