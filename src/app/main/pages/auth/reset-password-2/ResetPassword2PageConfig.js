import { lazy } from 'react';

const ResetPassword2Page = lazy(() => import('./ResetPassword2Page'));

const ResetPassword2PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/reset-password-2',
      element: <ResetPassword2Page />,
    },
  ],
};

export default ResetPassword2PageConfig;
