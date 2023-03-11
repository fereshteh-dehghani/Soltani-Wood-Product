import React, { createContext } from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import SalesInvoiceListHeader from './SalesInvoiceListHeader';
import SalesInvoiceListTable from './SalesInvoiceListTable';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 30,
    height: 30,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 30,
      height: 30,

    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
}));

function SalesInvoiceList() {
  return (
    <Root header={<SalesInvoiceListHeader />} content={<SalesInvoiceListTable />} innerScroll  />
  );
}

export default withReducer('buyAndSell', reducer)(SalesInvoiceList);
