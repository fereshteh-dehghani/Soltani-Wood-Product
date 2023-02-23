import { lazy } from 'react';

const PricingStyle2Page = lazy(() => import('./PricingStyle2Page'));

const PricingStyle2PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/pricing/style-2',
      element: <PricingStyle2Page />,
    },
  ],
};

export default PricingStyle2PageConfig;
