import { lazy } from 'react';

const MaintenancePage = lazy(() => import('./MaintenancePage'));

const MaintenancePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/maintenance',
      element: <MaintenancePage />,
    },
  ],
};

export default MaintenancePageConfig;
