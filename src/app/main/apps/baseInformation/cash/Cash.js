import React, { createContext } from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import CashHeader from './CashHeader';
import CashTable from './CashTable';

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

function Cash() {
  return <Root header={<CashHeader />} content={<CashTable />} innerScroll />;
}

export default withReducer('baseInformation', reducer)(Cash);
