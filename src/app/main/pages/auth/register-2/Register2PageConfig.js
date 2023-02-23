import { lazy } from 'react';

const Register2Page = lazy(() => import('./Register2Page'));

const Register2PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/register-2',
      element: <Register2Page />,
    },
  ],
};

export default Register2PageConfig;
