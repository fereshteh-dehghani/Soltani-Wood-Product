import { lazy } from 'react';

const ClassicSearchPage = lazy(() => import('./ClassicSearchPage'));

const ClassicSearchPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/search/classic',
      element: <ClassicSearchPage />,
    },
  ],
};

export default ClassicSearchPageConfig;
