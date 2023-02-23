import { lazy } from 'react';

const Error500Page = lazy(() => import('./Error500Page'));

const Error500PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/errors/error-500',
      element: <Error500Page />,
    },
  ],
};

export default Error500PageConfig;
