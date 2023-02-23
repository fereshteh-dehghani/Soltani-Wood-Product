import { lazy } from 'react';

const ModernInvoicePage = lazy(() => import('./ModernInvoicePage'));

const ModernInvoicePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/invoices/modern',
      element: <ModernInvoicePage />,
    },
  ],
};

export default ModernInvoicePageConfig;
