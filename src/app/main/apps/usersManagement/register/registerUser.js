import React from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import reducer from '../store';

import RegisterUserHeader from './registerUserHeader';
import RegisterUserForm from './registerUserForm';



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
}));

function RegisterUser() {

    return <Root header={<RegisterUserHeader />} content={<RegisterUserForm />} innerScroll />;

}

export default withReducer('userManagement', reducer)(RegisterUser);
