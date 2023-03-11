import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import FuseUtils from "@fuse/utils/FuseUtils";
import { Modal, Button, Text } from "@nextui-org/react";
import Select from "react-select";
import '../../../../../../../styles/MyStyles.css'
import { Grid, MenuItem, TextField, InputLabel, Box } from "@mui/material";
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

const styleDiv = {
    'text-align': 'right',
};

const defaultValue = {
    operation: '',
    price: '',
    number: '',
    bank: '',
    seryalNumber: '',
    cardNumber: '',
    description: '',
}

export default function PayAndReceiveByCardBank({
    paymentMethodData,
    optionSelectBank,
    operationOptions,
    addCommas,
    removeNonNumeric,
    convertPriceToNumber
}) {

    const { handleCardBank } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice)
    const dispatch = useDispatch();
    const closeHandler = () => dispatch(handleModals({ type: 'cardBank', isOpen: false }));

    const schema = yup.object().shape({
        type: yup.number().required('لطفا نوع پرداخت را مشخص کنید!'),
        price: yup.number().required('لطفا مبلغ را وارد کنید!'),
        bankId: yup.number().required('لطفا فیلد بانک را وارد کنید'),
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

    const type = watch('type');
    const bankId = watch('bankId');
    const price = watch('price');

    const handleClick = (data) => {
        const formData = getValues();
        if (paymentMethodData?.id !== undefined) {
            dispatch(updatePaymentMethodsItems({
                ...paymentMethodData,
                ...data,
            }))
        } else {
            dispatch(addToPaymentMethodsItems({
                id: FuseUtils.generateGUID(),
                paymentMethod: 'cardBank',
                paymentMethodPer: 'کارت بانکی',
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
        <div>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                width="60%"
                height="40%"
                open={handleCardBank}
                onClose={closeHandler}
            >
                <Modal.Header className="modal-header-style">
                    <Text id="modal-title" size={18}>
                        دریافت/پرداخت با کارت بانک
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Box>
                        <Grid style={styleDiv} container justifyContent="center" marginX="10px" spacing={2} row>
                            <Grid item xs={12} sm={5} className=" mb-5">
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
                            <Grid item xs={12} sm={5} className=" my-5">
                                <InputLabel>مبلغ</InputLabel>

                                <TextField
                                    required
                                    fullWidth
                                    name="price"
                                    id="price"
                                    size="small"
                                    error={!!errors?.price}
                                    helperText={errors?.price?.message}
                                    value={addCommas(removeNonNumeric(price))}
                                    onChange={(event) => setValue('price', convertPriceToNumber(event.target.value))}

                                />
                            </Grid>
                            <Grid item xs={12} sm={5} className=" mt-16 mb-5">
                                <InputLabel>بانک</InputLabel>

                                <Select

                                    labelId="demo-simple-select-label "
                                    className="react-select z-50"
                                    classNamePrefix="react-select"
                                    tabindex="0"
                                    fullWidth
                                    width="100%"
                                    options={optionSelectBank}
                                    inline
                                    placeholder="بانک"
                                    value={optionSelectBank?.find((item) => item.value === bankId)}
                                    onChange={(event) => setValue('bankId', event.value)}
                                />
                                {errors?.bankId && <span className="text-danger">{errors?.bankId?.message}</span>}

                            </Grid>
                            <Grid item xs={12} sm={5} className="my-5">
                                <InputLabel>شماره پایانه</InputLabel>

                                <TextField
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    name="number"
                                    id="number"
                                    size="small"
                                    {...register('number')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5} className=" my-5">
                                <InputLabel>شماره رسید</InputLabel>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    name="seryalNumber"
                                    id="seryalNumber"
                                    {...register('seryalNumber')}
                                    size="small"

                                />
                            </Grid>
                            <Grid item xs={12} sm={5} className="my-5">
                                <InputLabel>شماره کارت</InputLabel>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    name="cardNumber"
                                    id="cardNumber"
                                    size="small"
                                    {...register('cardNumber')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={8} className=" my-5">
                                <InputLabel>توضیحات:</InputLabel>
                                <TextField
                                    type="text"
                                    multiline
                                    rows={2}
                                    variant="outlined"
                                    fullWidth
                                    name="description"
                                    id="description"
                                    {...register('description')}
                                />
                            </Grid>

                        </Grid>
                    </Box>

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
                        کنسل
                    </Button>
                    <Button onPress={handleSubmit(handleClick)} size={14} css={styleSaveBtn}>
                        ثبت
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
