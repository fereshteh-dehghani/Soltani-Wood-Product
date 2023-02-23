import { lazy } from 'react';

const PricingStyle3Page = lazy(() => import('./PricingStyle3Page'));

const PricingStyle3PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/pricing/style-3',
      element: <PricingStyle3Page />,
    },
  ],
};

export default PricingStyle3PageConfig;
