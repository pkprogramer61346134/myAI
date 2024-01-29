import openai from './config/open-ai.js';

async function main(userInput) {
  

  const chatHistory = []; // Store conversation history

 


    try {
      // Construct messages by iterating over the history
      const messages = chatHistory.map(([role, content]) => ({
        role,
        content,
      }));

      // Add latest user input
      messages.push({ role: 'user', content: userInput });

      // Call the API with user input & history
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
      });

      // Get completion text/content
      const completionText = completion.data.choices[0].message.content;

      if (userInput.toLowerCase() === 'exit') {
      
        return   completionText;
      }

     
      return   completionText;

      // Update history with user input and assistant response
      chatHistory.push(['user', userInput]);
      chatHistory.push(['assistant', completionText]);
    } catch (error) {
      console.error(error);
    }
  
}

export default main;


