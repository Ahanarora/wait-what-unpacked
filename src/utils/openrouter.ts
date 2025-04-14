
export interface OpenRouterResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    message: {
      content: string;
      role: string;
    };
    index: number;
    finish_reason: string;
  }[];
}

export const askQuestion = async (
  question: string,
  context: string
): Promise<string> => {
  // This is a placeholder for the actual API call
  // In a real application, the API key would be securely stored
  const API_KEY = "YOUR_OPENROUTER_API_KEY"; // Placeholder for the API key
  
  try {
    // In a real implementation, this would call the actual OpenRouter API
    // For now, we'll simulate a response with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Generate a thoughtful response based on the question
        const response = `Based on the article content, ${generateSimulatedResponse(question, context)}`;
        resolve(response);
      }, 1000);
    });
    
    // The code below would be used for the actual API call:
    /*
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that answers questions about articles. 
                     Use the following article content as context for answering the user's question.
                     Article content: ${context}`
          },
          {
            role: "user",
            content: question
          }
        ]
      })
    });

    const data: OpenRouterResponse = await response.json();
    return data.choices[0].message.content;
    */
  } catch (error) {
    console.error("Error asking question:", error);
    return "I'm sorry, I couldn't process your question at this time. Please try again later.";
  }
};

// Function to generate simulated responses for the demo
function generateSimulatedResponse(question: string, context: string): string {
  // Check for common question patterns and generate appropriate responses
  if (question.toLowerCase().includes("summarize") || question.toLowerCase().includes("summary")) {
    return "This article discusses recent research findings that challenge conventional understanding, with experts debating the implications across various domains including policy, technology, and scientific advancement. The research, conducted over five years, has been independently verified but still faces skepticism from some critics. The findings have potential applications in multiple fields and may represent a significant paradigm shift in our understanding.";
  }
  
  if (question.toLowerCase().includes("main points") || question.toLowerCase().includes("key points")) {
    return "The main points of the article include: 1) New research challenging conventional wisdom, 2) Expert debates about the implications, 3) Data collected over five years with independent verification, 4) Potential applications across multiple domains, 5) Some skepticism from critics regarding methodology, and 6) Historical context suggesting similar revolutionary ideas faced initial resistance before gaining acceptance.";
  }
  
  if (question.toLowerCase().includes("implication") || question.toLowerCase().includes("impact")) {
    return "The implications of these findings are potentially far-reaching. They could influence policy-making, technological innovation, and problem-solving approaches in the coming decade. Different sectors may experience varying impacts - political systems might need to rethink governance approaches, businesses may face market disruptions requiring strategic adjustments, and scientific fields could see new collaborative initiatives across disciplines that rarely interact.";
  }
  
  if (question.toLowerCase().includes("why") && question.toLowerCase().includes("important")) {
    return "This research is important because it may fundamentally alter our approach to solving complex problems across multiple domains. The findings challenge established paradigms that may no longer be valid in today's rapidly evolving landscape. As the article concludes, 'our willingness to question established paradigms may well determine our capacity to address the complex challenges of tomorrow.' The potential applications in climate change mitigation, quantum computing, and governance systems make these findings particularly significant.";
  }

  // Default response for other questions
  return "The article provides detailed information on this topic, discussing the research methodology, expert opinions from figures like Dr. Maria Hernandez, and potential applications across various fields. The findings appear to challenge conventional wisdom and could have far-reaching implications for how we address complex challenges in the future.";
}
