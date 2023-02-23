import { lazy } from 'react';

const RegisterPage = lazy(() => import('./RegisterPage'));

const RegisterPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/register',
      element: <RegisterPage />,
    },
  ],
};

export default RegisterPageConfig;
