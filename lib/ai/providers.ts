import { customProvider } from 'ai';
import { google } from '@ai-sdk/google';
import { isTestEnvironment } from '../constants';
import { chatModel, titleModel } from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'title-model': titleModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': google('gemini-3-pro-preview'),
        'title-model': google('gemini-3-pro-preview'),
      },
    });
