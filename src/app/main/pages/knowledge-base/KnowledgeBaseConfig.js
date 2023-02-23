import { lazy } from 'react';

const KnowledgeBasePage = lazy(() => import('./KnowledgeBasePage'));

const KnowledgeBasePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/knowledge-base',
      element: <KnowledgeBasePage />,
    },
  ],
};

export default KnowledgeBasePageConfig;
