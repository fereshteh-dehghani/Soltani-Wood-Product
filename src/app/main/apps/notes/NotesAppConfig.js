import { lazy } from 'react';

const NotesApp = lazy(() => import('./NotesApp'));

const NotesAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/notes',
      element: <NotesApp />,
      children: [
        {
          path: ':id',
          element: <NotesApp />,
          children: [
            {
              path: ':labelHandle',
              element: <NotesApp />,
              children: [{ path: ':labelId', element: <NotesApp /> }],
            },
          ],
        },
      ],
    },
  ],
};

export default NotesAppConfig;
