import { lazy } from 'react';

const ResetPasswordPage = lazy(() => import('./ResetPasswordPage'));

const ResetPasswordPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/reset-password',
      element: <ResetPasswordPage />,
    },
  ],
};

export default ResetPasswordPageConfig;
