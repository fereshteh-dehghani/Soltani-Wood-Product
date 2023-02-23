import { lazy } from 'react';

const MailConfirmPage = lazy(() => import('./MailConfirmPage'));

const MailConfirmPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/auth/mail-confirm',
      element: <MailConfirmPage />,
    },
  ],
};

export default MailConfirmPageConfig;
