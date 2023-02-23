import React, { createContext } from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import BankAccountHeader from './bankAccountHeader';
import BankAccountTable from './bankAccountTable';


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

function BankAccount() {

    return <Root header={<BankAccountHeader />} content={<BankAccountTable />} innerScroll />;


}

export default withReducer('baseInformation', reducer)(BankAccount);
