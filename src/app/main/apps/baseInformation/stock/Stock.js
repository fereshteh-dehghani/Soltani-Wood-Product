import React, { createContext } from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import StockHeader from './StockHeader';
import StockTable from './StockTable';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 60,
    height: 60,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 60,
      height: 60,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
}));

function Stock() {
  return <Root header={<StockHeader />} content={<StockTable />} innerScroll />;
}

export default withReducer('baseInformation', reducer)(Stock);
