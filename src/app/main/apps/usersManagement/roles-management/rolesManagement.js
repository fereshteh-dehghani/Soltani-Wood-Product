import React, { useState } from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import RolesManagementTable from './rolesManagementTable';
import reducer from '../store';
import RolesManagementHeader from './rolesManagementHeader';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 136,
      height: 136,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
  '& .FusePageCarded-contentCard': {
    overflow: 'hidden',
  },
}));

function RolesManagement() {

 
  return <Root
    header={<RolesManagementHeader/>}
    content={<RolesManagementTable />}
    innerScroll
  />;
}

export default withReducer('userManagement', reducer)(RolesManagement);
