import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Modal, Button, Text } from "@nextui-org/react";
import Select from "react-select";
import FuseUtils from "@fuse/utils/FuseUtils";
import '../../../../../../../styles/MyStyles.css'
import { Grid, InputLabel, TextField } from "@mui/material";
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import { addToPaymentMethodsItems, findPaymentMethodData, updatePaymentMethodsItems } from "../../../store/paymentMethodsSlice";
import { handleModals } from "../../../store/handleModalsSlice";

const styleSaveBtn = {
    backgroundColor: '#00d084',
    borderRadius: '5px',
    fontSize: '1.2rem',
    width: '20%',
    padding: '5px',
}
const styleCancelBtn = {
    borderRadius: '5px',
    fontSize: '1.2rem',
    width: '15%',
    padding: '5px',
}

const styleDatePicker = {
    'text-align': 'right',
    padding: '4px 12px',
    'background-color': 'white',
    height: '36px',
    width: '120%',
};
const styleDiv = {
    'text-align': 'right',
};

const defaultValue = {
    account: '',
    check: '',
    date: '',
    payTo: '',
    price: '',
    description: '',
}

export default function PayAndReceiveByCheck({
    paymentMethodData,
    addCommas,
    convertPriceToNumber,
    removeNonNumeric
}) {

    const { handleMethodCheck } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice)
    const dispatch = useDispatch();
    const closeHandler = () => dispatch(handleModals({ type: 'check', isOpen: false }))
    const schema = yup.object().shape({
        price: yup.number().required('لطفا مبلغ را وارد کنید!'),
    })
    const {
        register,
        reset,
        setValue,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const price = watch('price');

    const handleClick = (data) => {
        // const formData = getValues();
        if (paymentMethodData?.id !== undefined) {
            dispatch(updatePaymentMethodsItems({
                ...paymentMethodData,
                ...data,
            }))
        } else {
            dispatch(addToPaymentMethodsItems({
                id: FuseUtils.generateGUID(),
                paymentMethod: 'check',
                paymentMethodPer: 'چک',
                ...data
            }
            ));
        }

        reset(defaultValue);
        dispatch(findPaymentMethodData({}));
    }

    useEffect(() => {
        if (paymentMethodData?.id !== undefined) reset(paymentMethodData);
    }, [])



    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            width="40%"
            height="40%"
            open={handleMethodCheck}
            onClose={closeHandler}
        >
            <Modal.Header className="modal-header-style">
                <Text id="modal-title" size={18}>
                    پرداخت چک
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Grid
                    style={styleDiv}
                    container
                    spacing={2}
                    justifyContent="center"
                    marginX="10px"
                    row
                >
                    <Grid item xs={12} sm={5} className="mb-5">
                        <InputLabel>حساب: </InputLabel>
                        <Select
                            isRtl
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable
                            name="userId"
                            style={{ direction: 'rtl' }}
                            // options={options}
                            // value={options?.find((item) => item.value === partyId)}
                            // value={{ value: partyId, label: partyRealName }}
                            onChange={(event) => {
                                setValue('account', event.label);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={5} className=" mb-5">
                        <InputLabel>چک</InputLabel>
                        <Select
                            isRtl
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable
                            name="userId"
                            style={{ direction: 'rtl' }}
                            // options={options}
                            // value={options?.find((item) => item.value === partyId)}
                            // value={{ value: partyId, label: partyRealName }}
                            onChange={(event) => {
                                setValue('check', event.label);
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={5} className="my-5">
                        <InputLabel>در وجه:</InputLabel>
                        <TextField
                            required
                            fullWidth
                            size="small"
                            {...register('payTo')}

                        />
                    </Grid>
                    <Grid item xs={12} sm={5} className="my-5">
                        <InputLabel>مبلغ</InputLabel>
                        <TextField
                            required
                            fullWidth
                            size="small"
                            error={!!errors?.price}
                            helperText={errors?.price?.message}
                            value={addCommas(removeNonNumeric(price))}
                            onChange={(event) => setValue('price', convertPriceToNumber(event.target.value))}
                        />
                    </Grid>
                    <Grid item xs={12} sm={9} className="my-5">
                        <InputLabel>:سررسید</InputLabel>

                        <DatePicker
                            id="date"
                            style={styleDatePicker}
                            calendar={persian}
                            locale={persianFa}
                            placeholder="تاریخ YYYY/MM/DD"
                            calendarPosition="bottom-right"
                            onChange={(date) => {
                                const d = new Date(date).toLocaleDateString('fa-IR');
                                setValue('date', d);

                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={9} className="mx-24 my-5">
                        <InputLabel>توضیحات</InputLabel>
                        <TextField
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
                    }} css={styleCancelBtn}
                >
                    کنسل
                </Button>
                <Button onPress={handleSubmit(handleClick)} size={14} css={styleSaveBtn}>
                    ثبت
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
