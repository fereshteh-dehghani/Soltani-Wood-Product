import { lazy } from 'react';

const FaqPage = lazy(() => import('./FaqPage'));

const FaqPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/faq',
      element: <FaqPage />,
    },
  ],
};

export default FaqPageConfig;
