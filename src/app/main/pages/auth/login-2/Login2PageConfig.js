import { lazy } from 'react';

const Login2Page = lazy(() => import('./Login2Page'));

const Login2PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/login-2',
      element: <Login2Page />,
    },
  ],
};

export default Login2PageConfig;
