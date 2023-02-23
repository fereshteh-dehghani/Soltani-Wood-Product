import { lazy } from 'react';

const Register3Page = lazy(() => import('./Register3Page'));

const Register3PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/register-3',
      element: <Register3Page />,
    },
  ],
};

export default Register3PageConfig;
