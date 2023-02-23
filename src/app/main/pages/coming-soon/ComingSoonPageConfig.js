import { lazy } from 'react';

const ComingSoonPage = lazy(() => import('./ComingSoonPage'));

const ComingSoonPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/coming-soon',
      element: <ComingSoonPage />,
    },
  ],
};

export default ComingSoonPageConfig;
