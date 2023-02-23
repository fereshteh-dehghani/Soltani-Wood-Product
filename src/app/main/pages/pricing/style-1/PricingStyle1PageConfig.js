import { lazy } from 'react';

const PricingStyle1Page = lazy(() => import('./PricingStyle1Page'));

const PricingStyle1PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/pricing/style-1',
      element: <PricingStyle1Page />,
    },
  ],
};

export default PricingStyle1PageConfig;
