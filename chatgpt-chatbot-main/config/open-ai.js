import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
  apiKey: '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',
  organization:'org-LjTqMQETyMdASDLPOuw2puir'
});

const openai = new OpenAIApi(configuration);

export default openai;
