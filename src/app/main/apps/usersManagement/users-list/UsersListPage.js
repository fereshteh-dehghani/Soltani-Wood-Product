import React from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import UsersTable from './UsersTable';
import reducer from '../store';
import UsersListHeader from './UsersListHeader';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 72,
      height: 72,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
}));

function UsersListPage() {
  return <Root header={<UsersListHeader />} content={<UsersTable />} innerScroll />;
}

export default withReducer('userManagement', reducer)(UsersListPage);
