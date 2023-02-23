import { lazy } from 'react';

const LockPage = lazy(() => import('./LockPage'));

const LockPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/lock',
      element: <LockPage />,
    },
  ],
};

export default LockPageConfig;
