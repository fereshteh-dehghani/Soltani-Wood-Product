import { lazy } from "react";

const SalesInvoice = lazy(() => import('./sales-invoce/SalesInvoice'));
const SalesInvoiceList = lazy(() => import('./sales-invoice-list/SalesInvoiceList'));

const BuyAndSellConfig = {
    setting: {
        layout: {
            config: {},
        }
    },
    routes: [
        {
            path: 'apps/buy-and-sell/sales-invoice/:saleInvoiceId/*',
            element: <SalesInvoice />
        },
        {
            path: 'apps/buy-and-sell/sales-invoice-list',
            element: <SalesInvoiceList />
        }
    ]
}

export default BuyAndSellConfig;