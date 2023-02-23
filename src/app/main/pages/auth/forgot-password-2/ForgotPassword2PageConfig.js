import { lazy } from 'react';

const ForgotPassword2Page = lazy(() => import('./ForgotPassword2Page'));

const ForgotPassword2PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/forgot-password-2',
      element: <ForgotPassword2Page />,
    },
  ],
};

export default ForgotPassword2PageConfig;
