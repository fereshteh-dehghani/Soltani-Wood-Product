import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useDeepCompareEffect } from '@fuse/hooks';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import _ from '@lodash';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { styled } from '@mui/material/styles';
import reducer from '../store';
import { getParty, newParty, resetParty } from '../store/partySlice';
import PartyHeader from './partyHeader';
import BasicInfoTab from './tabs/BasicInfoTab';
import OthersInfoTab from './tabs/OthersInfoTab';
import PartyBankAccount from './tabs/PartyBankAccount';
import PartyOpeningBalance from './tabs/PartyOpeningBalance';


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
}));

/**
 * Form Validation Schema
 */

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required('نام طرف حساب را وارد نمایید'),
    code: yup
        .string()
        .required('کد را وارد نمایید')
})

function Party(props) {

    const dispatch = useDispatch();
    const party = useSelector(({ baseInformation }) => baseInformation.partySlice)
    const [tabValue, setTabValue] = useState(0);
    const routeParams = useParams();
    const [noParty, setNoParty] = useState(false);
    const methods = useForm({
        mode: 'onChange',
        defaultValues: {},
        resolver: yupResolver(schema),
    })

    const { reset, watch, control, onChange, formState } = methods;
    const form = watch();

    useEffect(() => {
        localStorage.removeItem("partyId")
    }, [])


    useDeepCompareEffect(() => {
        function updatePartyState() {
            const { partyId } = routeParams;
            if (partyId === 'new') {
                /**
                 * Create New Customer Data
                 */
                dispatch(newParty())
            }
            else {
                /**
                 * Get Party Data
                 */
                dispatch(getParty(partyId))
                    .then((action) => {
                        /**
              * If the requested party is not exist show message
              */
                        if (!action.payload) {
                            setNoParty(true);
                        }
                    })
            }
        }
        updatePartyState();
    }, [dispatch, routeParams]);

    useEffect(() => {
        if (!party || party.type === undefined) {
            return;
        }
        /**
         * Reset the form on customer state changes
         */
        reset(party);
    }, [party, reset]);

    useEffect(() => {
        return () => {
            /**
             * Reset Party on component unload
             */
            dispatch(resetParty());
            setNoParty(false);
        };
    }, [dispatch]);

    function handleTabChange(event, value) {
        setTabValue(value);
    }

    /**
      * Show Message if the requested party is not exists
      */
    if (noParty) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1 } }}
                className="flex flex-col flex-1 items-center justify-center h-full"
            >
                <Typography color="textSecondary" variant="h5">
                    چنین طرف حسابی وجود ندارد !
                </Typography>
                <Button
                    className="mt-24"
                    component={Link}
                    variant="outlined"
                    to="/apps/e-commerce/products"
                    color="inherit"
                >
                    بازگشت به لیست طرف حساب
                </Button>
            </motion.div>
        );
    }

    /**
     * Wait while product data is loading and form is setted
  */

    if (
        _.isEmpty(form) ||
        (!party && routeParams.partyId !== 'new')

    ) {
        return <FuseLoading />;
    }



    return (
        <FormProvider {...methods}>
            <Root
                header={<PartyHeader />}
                contentToolbar={
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        classes={{ root: 'w-full h-64' }}
                    >
                        <Tab className="h-64" label="اطلاعات اصلی" />
                        <Tab className="h-64" label="سایر اطلاعات" />
                        <Tab className="h-64" label="حساب بانکی" />
                        <Tab className="h-64" label="مانده حساب" />
                    </Tabs>
                }
                content={
                    <div className="p-16 sm:p-24 max-w-2xl">
                        <div className={tabValue !== 0 ? 'hidden' : ''}>
                            <BasicInfoTab />
                        </div>
                        <div className={tabValue !== 1 ? 'hidden' : ''}>
                            <OthersInfoTab />
                            -             </div>
                        <div className={tabValue !== 2 ? 'hidden' : ''}>
                            <PartyBankAccount />
                        </div>
                        <div className={tabValue !== 3 ? 'hidden' : ''}>
                            <PartyOpeningBalance />
                        </div>

                    </div>
                }
                innerScroll
            />
        </FormProvider>
    );
}

export default withReducer('baseInformation', reducer)(Party)