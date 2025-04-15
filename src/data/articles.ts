import { Article, Category } from '@/types';

const generateArticleContent = (category: Category): string => {
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
  
  const selectedParagraphs = [paragraphs[0], ...shuffled.slice(0, 2), paragraphs[paragraphs.length - 1]];
  return selectedParagraphs.join("\n\n");
};

// Separate article sets for different time ranges
export const dailyArticles: Article[] = [
  {
    id: "politics-1",
    title: "Breaking: New Climate Agreement Reached",
    snippet: "World leaders announce groundbreaking climate accord with immediate action plans.",
    content: generateArticleContent('politics'),
    category: 'politics',
    date: "2025-04-15",
    author: "Eleanor Richards",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "science-1",
    title: "Quantum Computing Breakthrough",
    snippet: "Scientists achieve new milestone in quantum entanglement.",
    content: generateArticleContent('science'),
    category: 'science',
    date: "2025-04-15",
    author: "Dr. Aisha Patel",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: "business-1",
    title: "Tech Merger Creates Industry Giant",
    snippet: "Historic merger reshapes technology landscape with $50B deal.",
    content: generateArticleContent('business'),
    category: 'business',
    date: "2025-04-15",
    author: "Marcus Williams",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  }
];

export const weeklyArticles: Article[] = [
  {
    id: "politics-weekly-1",
    title: "Global Security Framework Overhaul",
    snippet: "Major nations agree on new cybersecurity cooperation protocol.",
    content: generateArticleContent('politics'),
    category: 'politics',
    date: "2025-04-12",
    author: "Thomas Zerinki",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: "science-weekly-1",
    title: "Mars Colony Plans Accelerated",
    snippet: "Space agencies announce joint venture for permanent Mars settlement.",
    content: generateArticleContent('science'),
    category: 'science',
    date: "2025-04-10",
    author: "Dr. Helena Schmidt",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  }
];

export const monthlyArticles: Article[] = [
  {
    id: "politics-monthly-1",
    title: "Democracy Index 2025 Released",
    snippet: "Annual report shows significant shifts in global democratic standings.",
    content: generateArticleContent('politics'),
    category: 'politics',
    date: "2025-04-01",
    author: "Maria Gonzalez",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  }
];

export const getArticlesByCategory = (category: Category | 'all', timeRange: 'daily' | 'weekly' | 'monthly'): Article[] => {
  let articles;
  switch(timeRange) {
    case 'daily':
      articles = dailyArticles;
      break;
    case 'weekly':
      articles = weeklyArticles;
      break;
    case 'monthly':
      articles = monthlyArticles;
      break;
    default:
      articles = dailyArticles;
  }
  
  return category === 'all' ? articles : articles.filter(article => article.category === category);
};

export const getArticleById = (id: string): Article | undefined => {
  return [...dailyArticles, ...weeklyArticles, ...monthlyArticles].find(article => article.id === id);
};
