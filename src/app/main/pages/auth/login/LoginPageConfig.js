import { lazy } from 'react';

const LoginPage = lazy(() => import('./LoginPage'));

const LoginPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/login',
      element: <LoginPage />,
    },
  ],
};

export default LoginPageConfig;
