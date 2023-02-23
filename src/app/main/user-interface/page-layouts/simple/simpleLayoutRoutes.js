import { lazy } from 'react';

const FullWidth = lazy(() => import('./full-width'));
const LeftSidebar = lazy(() => import('./left-sidebar'));
const LeftSidebar2 = lazy(() => import('./left-sidebar-2'));
const LeftSidebar3 = lazy(() => import('./left-sidebar-3'));
const RightSidebar = lazy(() => import('./right-sidebar'));
const RightSidebar2 = lazy(() => import('./right-sidebar-2'));
const RightSidebar3 = lazy(() => import('./right-sidebar-3'));
const Tabbed = lazy(() => import('./tabbed'));

const simpleLayoutRoutes = [
  {
    path: 'ui/page-layouts/simple/full-width',
    element: <FullWidth />,
  },
  {
    path: 'ui/page-layouts/simple/left-sidebar',
    element: <LeftSidebar />,
  },
  {
    path: 'ui/page-layouts/simple/left-sidebar-2',
    element: <LeftSidebar2 />,
  },
  {
    path: 'ui/page-layouts/simple/left-sidebar-3',
    element: <LeftSidebar3 />,
  },
  {
    path: 'ui/page-layouts/simple/right-sidebar',
    element: <RightSidebar />,
  },
  {
    path: 'ui/page-layouts/simple/right-sidebar-2',
    element: <RightSidebar2 />,
  },
  {
    path: 'ui/page-layouts/simple/right-sidebar-3',
    element: <RightSidebar3 />,
  },
  {
    path: 'ui/page-layouts/simple/tabbed',
    element: <Tabbed />,
  },
];

export default simpleLayoutRoutes;
