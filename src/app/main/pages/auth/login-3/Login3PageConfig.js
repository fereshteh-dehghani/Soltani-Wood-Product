import { lazy } from 'react';

const Login3Page = lazy(() => import('./Login3Page'));

const Login3PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/login-3',
      element: <Login3Page />,
    },
  ],
};

export default Login3PageConfig;
