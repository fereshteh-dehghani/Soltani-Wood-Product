import { lazy } from 'react';

const ForgotPasswordPage = lazy(() => import('./ForgotPasswordPage'));

const ForgotPasswordPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/forgot-password',
      element: <ForgotPasswordPage />,
    },
  ],
};

export default ForgotPasswordPageConfig;
