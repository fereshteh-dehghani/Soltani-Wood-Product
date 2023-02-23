import { lazy } from 'react';

const CompactInvoicePage = lazy(() => import('./CompactInvoicePage'));

const CompactInvoicePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/invoices/compact',
      element: <CompactInvoicePage />,
    },
  ],
};

export default CompactInvoicePageConfig;
