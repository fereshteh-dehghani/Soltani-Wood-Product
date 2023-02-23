import React, { createContext } from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import BankHeader from './bankHeader';
import BankTable from './bankTable';


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

function Bank() {

  return <Root header={<BankHeader />} content={<BankTable />} innerScroll />;


}

export default withReducer('baseInformation', reducer)(Bank);
