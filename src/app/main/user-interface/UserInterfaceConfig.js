import { lazy } from 'react';
import cardedLayoutRoutes from './page-layouts/carded/cardedLayoutRoutes';
import simpleLayoutRoutes from './page-layouts/simple/simpleLayoutRoutes';

const Blank = lazy(() => import('./page-layouts/blank'));
const IconsUI = lazy(() => import('./icons/IconsUI'));
const TypographyUI = lazy(() => import('./typography/TypographyUI'));
const HelperClassesUI = lazy(() => import('./helper-classes/HelperClassesUI'));

const UserInterfaceConfig = {
  routes: [
    ...cardedLayoutRoutes,
    ...simpleLayoutRoutes,
    {
      path: 'ui/page-layouts/blank',
      element: <Blank />,
    },
    {
      path: 'ui/icons',
      element: <IconsUI />,
    },
    {
      path: 'ui/typography',
      element: <TypographyUI />,
    },
    {
      path: 'ui/helper-classes',
      element: <HelperClassesUI />,
    },
  ],
};

export default UserInterfaceConfig;
