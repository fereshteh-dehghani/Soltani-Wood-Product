import { lazy } from 'react';

const ModernSearchPage = lazy(() => import('./ModernSearchPage'));

const ModernSearchPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/search/modern',
      element: <ModernSearchPage />,
    },
  ],
};

export default ModernSearchPageConfig;
