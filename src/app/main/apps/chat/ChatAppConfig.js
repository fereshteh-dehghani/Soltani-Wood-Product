import { lazy } from 'react';

const ChatApp = lazy(() => import('./ChatApp'));

const ChatAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/chat',
      element: <ChatApp />,
    },
  ],
};

export default ChatAppConfig;
