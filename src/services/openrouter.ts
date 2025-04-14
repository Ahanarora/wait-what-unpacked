
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

export const callOpenRouter = async (
  question: string, 
  articleText: string
): Promise<string> => {
  const API_KEY = "sk-or-REPLACE_ME";

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "HTTP-Referer": window.location.href,
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that answers questions about articles.
                     Use the following article content as context for answering the user's question.
                     Article content: ${articleText}`,
          },
          {
            role: "user",
            content: question,
          }
        ]
      })
    });

    const data: OpenRouterResponse = await response.json();
    return data.choices[0]?.message?.content || "No answer received.";
  } catch (error) {
    console.error("Error calling OpenRouter:", error);
    return "No answer received.";
  }
};
