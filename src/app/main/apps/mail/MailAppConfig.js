import i18next from 'i18next';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import ar from './i18n/ar';
import en from './i18n/en';
import tr from './i18n/tr';
import fa from './i18n/fa';

const MailApp = lazy(() => import('./MailApp'));

i18next.addResourceBundle('fa', 'mailApp', fa);
i18next.addResourceBundle('en', 'mailApp', en);
i18next.addResourceBundle('tr', 'mailApp', tr);
i18next.addResourceBundle('ar', 'mailApp', ar);

const MailAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/mail/label/:labelHandle',
      element: <MailApp />,
      children: [{ path: ':mailId', element: <MailApp /> }],
    },
    {
      path: 'apps/mail/filter/:filterHandle',
      element: <MailApp />,
      children: [{ path: ':mailId', element: <MailApp /> }],
    },
    {
      path: '/apps/mail/:folderHandle',
      element: <MailApp />,
      children: [{ path: ':mailId', element: <MailApp /> }],
    },
    {
      path: 'apps/mail',
      element: <Navigate to="/apps/mail/inbox" />,
    },
  ],
};

export default MailAppConfig;
