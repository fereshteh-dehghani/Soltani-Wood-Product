import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Modal, Button, Text } from "@nextui-org/react";
import Select from "react-select";
import FuseUtils from "@fuse/utils/FuseUtils";
import '../../../../../../../styles/MyStyles.css'
import { Box, Grid, InputLabel, TextField } from "@mui/material";
import {
    addToPaymentMethodsItems,
    findPaymentMethodData,
    updatePaymentMethodsItems
} from "../../../store/paymentMethodsSlice";
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
    operational: '',
    part: '',
    price: '',
    description: '',
}

export default function PayOrReceiveAsDiscount({ paymentMethodData, operationOptions, addCommas, convertPriceToNumber, removeNonNumeric }) {

    const { handleMethodDiscount } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice)
    const dispatch = useDispatch();
    const closeHandler = () => dispatch(handleModals({ type: 'discount', isOpen: false }))

    const schema = yup.object().shape({
        type: yup.number().required('لطفا نوع پرداخت را مشخص کنید!'),
        price: yup.number().required('لطفا مبلغ را وارد کنید!'),
    })

    const {
        register,
        reset,
        setValue,
        getValues,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const price = watch('price');
    const type = watch('type');

    const handleClick = (data) => {
        // const formData = getValues();
        if (paymentMethodData?.id !== undefined) {
            dispatch(updatePaymentMethodsItems({
                ...paymentMethodData,
                ...data,
                // ...formData,
            }))
        } else {
            dispatch(addToPaymentMethodsItems({
                id: FuseUtils.generateGUID(),
                paymentMethod: 'discount',
                paymentMethodPer: 'تخفیف',
                ...data
                // ...formData
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
            open={handleMethodDiscount}
            onClose={closeHandler}
        >
            <Modal.Header className="modal-header-style">
                <Text id="modal-title" size={18}>
                    پرداخت / دریافت به صورت تخفیف
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Box container component="form" >
                    <Grid style={styleDiv} container justifyContent="center" marginX="10px" row>
                        <Grid item xs={12} sm={9} className="mx-24 mt-16 mb-5">
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
                        <Grid item xs={12} sm={9} className="mx-24 mt-16 mb-5">
                            <InputLabel>:عملیات</InputLabel>
                            <Select
                                isRtl
                                className="basic-single"
                                classNamePrefix="select"
                                isSearchable
                                name="userId"
                                style={{ direction: 'rtl' }}
                                options={operationOptions}
                                value={operationOptions?.find((item) => item.value === type)}
                                onChange={(event) => {
                                    setValue('type', event.value);
                                }}
                            />
                            {errors?.type && <span className="text-danger">{errors?.type?.message}</span>}

                        </Grid>

                        <Grid item xs={12} sm={9} className="mx-24 my-5">
                            <InputLabel>:مبلغ</InputLabel>
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
                        <Grid item xs={12} sm={9} className="mx-24 mt-16 mb-5">
                            <InputLabel>:بخش</InputLabel>
                            <Select
                                isRtl
                                className="basic-single"
                                classNamePrefix="select"
                                isSearchable
                                name="part"
                                style={{ direction: 'rtl' }}
                                // options={options}
                                // value={options?.find((item) => item.value === partyId)}
                                // value={{ value: partyId, label: partyRealName }}
                                onChange={(event) => {
                                    setValue('part', event.label);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={9} className="mx-24 my-5">
                            <InputLabel>:توضیحات</InputLabel>
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
                </Box>

            </Modal.Body>
            <Modal.Footer>
                <Button
                    color="error"
                    size={16}
                    onPress={() => {
                        dispatch(findPaymentMethodData({}));
                        closeHandler();
                    }}
                    css={styleCancelBtn}
                >
                    کنسل
                </Button>
                <Button size={16} onPress={handleSubmit(handleClick)} css={styleSaveBtn}>
                    ثبت
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
