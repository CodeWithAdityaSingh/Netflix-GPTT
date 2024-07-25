import OpenAI from 'openai';
import {OPEN_AIKEY} from '../utils/constance'

const openAi = new OpenAI({
  apiKey: OPEN_AIKEY, dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
});

export default openAi
