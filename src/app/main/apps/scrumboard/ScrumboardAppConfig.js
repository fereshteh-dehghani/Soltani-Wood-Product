import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Board = lazy(() => import('./board/Board'));
const Boards = lazy(() => import('./boards/Boards'));

const ScrumboardAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/scrumboard/boards/:boardId',
      element: <Board />,
      children: [
        {
          path: ':boardUri',
          element: <Board />,
        },
      ],
    },
    {
      path: 'apps/scrumboard/boards',
      element: <Boards />,
    },
    {
      path: 'apps/scrumboard',
      element: <Navigate to="/apps/scrumboard/boards" />,
    },
  ],
};

export default ScrumboardAppConfig;
