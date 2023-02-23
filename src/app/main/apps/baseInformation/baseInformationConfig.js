import { lazy } from 'react';

// const  ProductDifination= lazy(()=>import('./product-difination/productDifination'));
const ProductGroupList = lazy(() => import('./product-group-list/productGroupList'));
const Units = lazy(() => import('./Units/units'));
const Product = lazy(() => import('./product/Product'));
const ProductListPage = lazy(() => import('./product-list/productListPage'));
const Party = lazy(() => import('./party/party'));
const PartyList = lazy(() => import('./party-list/partyListPage'));
const PartyGroups = lazy(() => import('./partyGroups/partyGroups'));
const Bank = lazy(() => import('./bank/bank'));
const BankAccount = lazy(() => import('./bankAccount/bankAccount'));
const Stock = lazy(() => import('./stock/Stock'));
const Cash = lazy(() => import('./cash/Cash'));

const BaseInformationConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/baseInformation/productList',
      element: <ProductListPage />,
    },
    {
      path: 'apps/baseInformation/products/:productId/*',
      element: <Product />,
    },
    {
      path: 'apps/baseInformation/product-group-list',
      element: <ProductGroupList />,
    },
    {
      path: 'apps/baseInformation/Units',
      element: <Units />,
    },
    {
      path: 'apps/baseInformation/party/:partyId/*',
      element: <Party />,
    },
    {
      path: 'apps/baseInformation/party-list',
      element: <PartyList />,
    },
    {
      path: 'apps/baseInformation/party-groups',
      element: <PartyGroups />,
    },
    {
      path: 'apps/baseInformation/bank-list',
      element: <Bank />,
    },
    {
      path: 'apps/baseInformation/bank-account',
      element: <BankAccount />,
    },
    {
      path: 'apps/baseInformation/stock',
      element: <Stock />,
    },
    {
      path: 'apps/baseInformation/cash',
      element: <Cash />,
    },
  ],
};

export default BaseInformationConfig;
