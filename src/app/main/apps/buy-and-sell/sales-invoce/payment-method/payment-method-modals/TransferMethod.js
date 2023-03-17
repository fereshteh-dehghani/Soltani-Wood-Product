import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Modal, Button, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import FuseUtils from "@fuse/utils/FuseUtils";
import Select from "react-select";
import '../../../../../../../styles/MyStyles.css'
import { Grid, MenuItem, TextField, InputLabel } from "@mui/material";
import { apiUrlGetPartyListForFactor } from "app/services/jwtService/defaultValues";
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import { addToPaymentMethodsItems, findPaymentMethodData, updatePaymentMethodsItems } from "../../../store/paymentMethodsSlice";
import { handleModals } from "../../../store/handleModalsSlice";


const styleSaveBtn = {
    backgroundColor: "#153247",
    borderRadius: '5px',
    width: '48%',
    padding: '5px',
    paddingLeft: '50px',
    paddingRight: '50px',
}
const styleCancelBtn = {
    borderRadius: '5px',
    fontSize: '1.2rem',
    width: '48%',
    padding: '5px',
    paddingLeft: '50px',
    paddingRight: '50px',
}

const styleDatePicker = {
    'text-align': 'right',
    padding: '4px 12px',
    'background-color': 'white',
    height: '36px',
    width: '100%',
};

const styleDiv = {
    'text-align': 'right',
}

const defaultValue = {
    debitPartyId: -1,
    creditPartyId: -1,
    datePer: '',
    amount: '',
    description: ''
}

export default function TransferMethod({
    paymentMethodData,
    operationOptions,
    addCommas,
    removeNonNumeric,
    convertPriceToNumber
}) {

    const { handleTransferMethod } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice);
    const { debitPartyInfo } = useSelector(({ buyAndSell }) => buyAndSell.salesInvoiceSlice);
    const dispatch = useDispatch();
    const [partyList, setPartyList] = useState([]);
    const [optionsUsers, setOptionsUsers] = useState([]);
    const closeHandler = () => {
        dispatch(findPaymentMethodData({}));
        dispatch(handleModals({ type: 'offSetting', isOpen: false }))
    };

    const schema = yup.object().shape({
        creditPartyId: yup.number().required('لطفا شخص دریافت کننده را مشخص کنید!'),
        amount: yup.number().required('لطفا مبلغ را وارد کنید!'),
        datePer: yup.string().required('لطفا تاریخ را وارد کنید!')
    })

    const {
        register,
        reset,
        handleSubmit,
        setValue,
        getValues,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const amount = watch('amount');
    const creditPartyId = watch('creditPartyId');
    const description = watch('description');

    const handleClick = (data) => {

        const findCreditPartyName = optionsUsers.find((item) => item.value === creditPartyId).label;

        if (paymentMethodData?.id !== undefined) {
            dispatch(updatePaymentMethodsItems({
                ...paymentMethodData,
                ...data,
                description: `انتقال  مبلغ ${amount} از حساب ${debitPartyInfo.debitPartyName}  به شخص ${findCreditPartyName}`

            }))
        } else {
            dispatch(addToPaymentMethodsItems({
                id: FuseUtils.generateGUID(),
                paymentMethod: 'offSetting',
                paymentMethodPer: 'تهاتر',
                ...data,
                description: ` انتقال  مبلغ ${amount} از حساب ${debitPartyInfo.debitPartyName}  به شخص ${findCreditPartyName}`
            }
            ));
        }

        reset(defaultValue);
        dispatch(findPaymentMethodData({}));
    }

    useEffect(() => {
        if (paymentMethodData?.id !== undefined) reset(paymentMethodData);
        setValue('debitPartyId', debitPartyInfo.debitPartyId)
    }, [])


    useEffect(() => {
        axios
            .get(`${apiUrlGetPartyListForFactor}?textToFind=${''}`)
            .then((resp) => {
                const result = [...resp.data.result];
                const tempArray = [];
                setPartyList(result);
                result.forEach((item) => {
                    tempArray.push({ value: item.partyId, label: item.fullName });
                });
                setOptionsUsers([...tempArray]);
            })
            .catch((err) => {
                console.log('Error in Get Userslist', err);
            });
    }, []);


    return (
        <div>
            <Modal
                closeButton
                style={{ alignItems: "center", paddingTop: "0px" }}
                aria-labelledby="modal-title"
                width="60%"
                height="60%"
                open={handleTransferMethod}
                onClose={closeHandler}
            >
                <Modal.Header style={{ backgroundColor: "#1B2330", width: "100%", padding: '2%' }}>
                    <Text id="modal-title" size={18} color="#fff">
                        واریز به حساب
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid style={styleDiv} container justifyContent="center" marginX="10px" row spacing={1}>
                        <Grid item xs={12} sm={9} className="mx-24 mt-16 mb-5">
                            <Text size={16} color="#333">
                                دریافت از : <span> {`${debitPartyInfo.debitPartyName} `} </span>
                            </Text>
                        </Grid>


                        <Grid item xs={12} sm={9} className="mt-16 mb-5">
                            <InputLabel>پرداخت به شخص</InputLabel>
                            <Select
                                isRtl
                                className="basic-single"
                                classNamePrefix="select"
                                isSearchable
                                name="creditPartyId"
                                style={{ direction: 'rtl' }}
                                options={optionsUsers}
                                value={optionsUsers?.find((item) => item.value === creditPartyId)}
                                onChange={(event) => {
                                    setValue('creditPartyId', event.value);
                                }}
                            />
                            {errors?.creditPartyId && <span className="text-danger">{errors?.creditPartyId?.message}</span>}

                        </Grid>
                        <Grid item xs={12} sm={5} className="my-5">
                            <InputLabel>مبلغ</InputLabel>
                            <TextField
                                required
                                fullWidth
                                name="amount"
                                id="amount"
                                size="small"
                                error={!!errors?.amount}
                                helperText={errors?.amount?.message}
                                value={addCommas(removeNonNumeric(amount))}
                                onChange={(event) => setValue('amount', convertPriceToNumber(event.target.value))}

                            />
                        </Grid>
                        <Grid item xs={12} sm={4} className="my-5">
                            <InputLabel>تاریخ</InputLabel>
                            <DatePicker
                                id="datePer"
                                style={styleDatePicker}
                                calendar={persian}
                                locale={persianFa}
                                placeholder="YYYY/MM/DD"
                                calendarPosition="right-center"
                                containerStyle={{
                                    width: '100%'
                                }}
                                onChange={(date) => {
                                    const d = new Date(date).toLocaleDateString('fa-IR');
                                    setValue('datePer', d);

                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={9} className="my-5">
                            <InputLabel>توضیحات</InputLabel>
                            <TextField
                                id="description"
                                type="text"
                                multiline
                                rows={2}
                                variant="outlined"
                                fullWidth
                                {...register('description')}

                            />
                        </Grid>

                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        color="error"
                        size={14}
                        onPress={() => {
                            dispatch(findPaymentMethodData({}));
                            closeHandler();
                        }}
                        css={styleCancelBtn}
                    >
                        <Text color="#fff" size={16} >بستن</Text>

                    </Button>
                    <Button
                        onPress={handleSubmit(handleClick)}
                        size={16}
                        css={styleSaveBtn}

                    >
                        <Text color="#fff" size={14} >ثبت</Text>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
