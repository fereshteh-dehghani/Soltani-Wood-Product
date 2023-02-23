import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { showMessage } from 'app/store/fuse/messageSlice';
import { useFormContext } from 'react-hook-form';
import { Loading, Text } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import _ from '@lodash';
import { saveParty, updateParty, newParty } from '../store/partySlice';

function PartyHeader(props) {
    const methods = useFormContext();
    const { formState, watch, getValues, reset } = methods;
    const routeParams = useParams();
    const { partyId } = routeParams;
    const theme = useTheme();
    const dispatch = useDispatch();

    const [loadingBtn, setLoadingBtn] = useState(false);


    const convertPriceToNumber = (price) => {
        if (price !== 0 && typeof price !== "number") {
            const numberArray = price.split(',');
            price = +numberArray.join('');
        }
        return price;
    }

    function handleSaveParty(e) {
        e.preventDefault();
        setLoadingBtn(true);
        const dataForm = {
            ...getValues(),
            customerCredit: convertPriceToNumber(getValues().customerCredit),
            partyOpeningBalance: {
                openingBalanceType: getValues().partyOpeningBalance.openingBalanceType,
                openingBalance: convertPriceToNumber(getValues().partyOpeningBalance.openingBalance)
            }
        };
        if (partyId === "new") {
            dispatch(saveParty({ ...dataForm }))
                .unwrap()
                .then((res) => {
                    if (res !== undefined && res.result && res.errors.length === 0) {
                        dispatch(
                            showMessage({
                                message: 'عملیات با موفقیت انجام شد', // text or html
                                autoHideDuration: 6000, // ms
                                anchorOrigin: {
                                    vertical: 'top', //   top bottom
                                    horizontal: 'right' //  left center right
                                },
                                variant: 'success' //   success error info warning null
                            }))
                        dispatch(newParty());
                        setLoadingBtn(false);
                    } else {
                        dispatch(
                            showMessage({
                                message: 'عملیات با خطا انجام شد', // text or html
                                autoHideDuration: 6000, // ms
                                anchorOrigin: {
                                    vertical: 'top', //   top bottom
                                    horizontal: 'right' //  left center right
                                },
                                variant: 'error' //   success error info warning null
                            }))
                        setLoadingBtn(false);
                    }
                })
                .catch((err) => {
                    dispatch(
                        showMessage({
                            message: 'عملیات با خطا انجام شد', // text or html
                            autoHideDuration: 6000, // ms
                            anchorOrigin: {
                                vertical: 'top', //   top bottom
                                horizontal: 'right' //  left center right
                            },
                            variant: 'error' //   success error info warning null
                        }))
                    setLoadingBtn(false);
                });

        }
        else {
            dispatch(updateParty({ ...dataForm }))
                .unwrap()
                .then((res) => {
                    if (res !== undefined && res.result && res.errors.length === 0) {
                        dispatch(
                            showMessage({
                                message: 'عملیات با موفقیت انجام شد', // text or html
                                autoHideDuration: 6000, // ms
                                anchorOrigin: {
                                    vertical: 'top', //   top bottom
                                    horizontal: 'right' //  left center right
                                },
                                variant: 'success' //   success error info warning null
                            }))
                        dispatch(newParty());
                        setLoadingBtn(false);
                    } else {
                        dispatch(
                            showMessage({
                                message: 'عملیات با خطا انجام شد', // text or html
                                autoHideDuration: 6000, // ms
                                anchorOrigin: {
                                    vertical: 'top', //   top bottom
                                    horizontal: 'right' //  left center right
                                },
                                variant: 'error' //   success error info warning null
                            }))
                        setLoadingBtn(false);
                    }
                })
                .catch((err) => {
                    dispatch(
                        showMessage({
                            message: 'عملیات با خطا انجام شد', // text or html
                            autoHideDuration: 6000, // ms
                            anchorOrigin: {
                                vertical: 'top', //   top bottom
                                horizontal: 'right' //  left center right
                            },
                            variant: 'error' //   success error info warning null
                        }))
                    setLoadingBtn(false);
                });

        }
    }

    return (
        <div className="flex flex-1 w-full items-center justify-between">
            <div className="flex flex-col items-start max-w-full min-w-0">
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
                >
                    <Typography
                        className="flex items-center sm:mb-12"
                        component={Link}
                        role="button"
                        to="/apps/e-commerce/products"
                        color="inherit"
                    >
                        <Icon className="text-20">
                            {theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
                        </Icon>
                        <span className="hidden sm:flex mx-4 font-medium">محصولات</span>
                    </Typography>
                </motion.div>

                <div className="flex items-center max-w-full">
                    <motion.div
                        className="hidden sm:flex"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { delay: 0.3 } }}
                    >
                        icon
                    </motion.div>
                    <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
                        <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
                            <Typography className="text-16 sm:text-20 truncate font-semibold">
                                مشتری جدید
                            </Typography>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                className="flex"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            >

                <Button
                    className="whitespace-nowrap mx-4"
                    variant="contained"
                    color="secondary"
                    // disabled={_.isEmpty(dirtyFields) || !isValid}
                    onClick={handleSaveParty}
                >
                    {
                        loadingBtn &&
                        <Loading type="points" color="currentColor" size="sm" />
                    }

                    {!loadingBtn &&
                        <Text size={12} color="#fff">
                            ثبت مشتری
                        </Text>
                    }
                </Button>
            </motion.div>
        </div>
    );
}

export default PartyHeader;
