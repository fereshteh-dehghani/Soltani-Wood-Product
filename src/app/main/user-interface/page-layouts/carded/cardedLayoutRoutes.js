import { lazy } from 'react';

const FullWidth = lazy(() => import('./full-width'));
const FullWidth2 = lazy(() => import('./full-width-2'));
const FullWidthTabbed = lazy(() => import('./full-width-tabbed'));
const FullWidth2Tabbed = lazy(() => import('./full-width-2-tabbed'));
const LeftSidebar = lazy(() => import('./left-sidebar'));
const LeftSidebar2 = lazy(() => import('./left-sidebar-2'));
const LeftSidebarTabbed = lazy(() => import('./left-sidebar-tabbed'));
const LeftSidebar2Tabbed = lazy(() => import('./left-sidebar-2-tabbed'));
const RightSidebar = lazy(() => import('./right-sidebar'));
const RightSidebar2 = lazy(() => import('./right-sidebar-2'));
const RightSidebarTabbed = lazy(() => import('./right-sidebar-tabbed'));
const RightSidebar2Tabbed = lazy(() => import('./right-sidebar-2-tabbed'));

const cardedLayoutRoutes = [
  {
    path: 'ui/page-layouts/carded/full-width',
    element: <FullWidth />,
  },
  {
    path: 'ui/page-layouts/carded/full-width-tabbed',
    element: <FullWidthTabbed />,
  },
  {
    path: 'ui/page-layouts/carded/full-width-2',
    element: <FullWidth2 />,
  },
  {
    path: 'ui/page-layouts/carded/full-width-2-tabbed',
    element: <FullWidth2Tabbed />,
  },
  {
    path: 'ui/page-layouts/carded/left-sidebar',
    element: <LeftSidebar />,
  },
  {
    path: 'ui/page-layouts/carded/left-sidebar-tabbed',
    element: <LeftSidebarTabbed />,
  },
  {
    path: 'ui/page-layouts/carded/left-sidebar-2',
    element: <LeftSidebar2 />,
  },
  {
    path: 'ui/page-layouts/carded/left-sidebar-2-tabbed',
    element: <LeftSidebar2Tabbed />,
  },
  {
    path: 'ui/page-layouts/carded/right-sidebar',
    element: <RightSidebar />,
  },
  {
    path: 'ui/page-layouts/carded/right-sidebar-tabbed',
    element: <RightSidebarTabbed />,
  },
  {
    path: 'ui/page-layouts/carded/right-sidebar-2',
    element: <RightSidebar2 />,
  },
  {
    path: 'ui/page-layouts/carded/right-sidebar-2-tabbed',
    element: <RightSidebar2Tabbed />,
  },
];

export default cardedLayoutRoutes;
