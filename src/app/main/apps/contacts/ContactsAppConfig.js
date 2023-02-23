import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ContactsApp = lazy(() => import('./ContactsApp'));

const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/contacts/:id',
      element: <ContactsApp />,
    },
    {
      path: 'apps/contacts',
      element: <Navigate to="/apps/contacts/all" />,
    },
  ],
};

export default ContactsAppConfig;
