import React, { useState, useEffect } from "react";
import FuseUtils from "@fuse/utils/FuseUtils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { Grid, InputLabel, MenuItem, TextField, Box } from "@mui/material";
import { Modal, Button, Text } from "@nextui-org/react";
import Select from "react-select";
import '../../../../../../../styles/MyStyles.css'
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
    id: '',
    price: '',
    cashId: '',
    type: '',
    serialNumber: '',
    description: '',

}

export default function CashPayment({ paymentMethodData, operationOptions, cashList, addCommas, removeNonNumeric, convertPriceToNumber }) {

    const { modalOpenCashPayment } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice);
    const closeHandler = () => dispatch(handleModals({ type: 'cash', isOpen: false }));
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        type: yup.number().required('لطفا نوع پرداخت را مشخص کنید!'),
        price: yup.number().required('لطفا مبلغ را وارد کنید!'),
        cashId: yup.number().required('لطفا مبلغ را وارد کنید!'),

    })


    const {
        register,
        handleSubmit,
        control,
        setValue,
        reset,
        getValues,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const type = watch('type');
    const cashId = watch('cashId');
    const price = watch('price');
    useEffect(() => {
        if (paymentMethodData?.id !== undefined) reset(paymentMethodData);
    }, [])

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
                paymentMethod: 'cash',
                paymentMethodPer: 'پرداخت نقدی',
                ...data
            }
            ));
        }
        dispatch(findPaymentMethodData({}));
        reset({ ...defaultValue });

    }

    return (
        <div>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                width="40%"
                height="40%"
                open={modalOpenCashPayment}
                onClose={closeHandler}
            >
                <Modal.Header className="modal-header-style">
                    <Text id="modal-title" size={18}>
                        دریافت / پرداخت
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Box container justifyContent="flex" component="form">
                        <Grid style={styleDiv} container justifyContent="center" marginX="10px" row>
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
                                    // value={{ value: partyId, label: partyRealName }}
                                    onChange={(event) => {
                                        setValue('type', event.value);
                                    }}
                                />
                                {errors?.type && <span className="text-danger">{errors?.type?.message}</span>}
                            </Grid>
                            <Grid item xs={12} sm={9} className="mx-24 my-5">
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
                                    onChange={(event) => {
                                        setValue('price', convertPriceToNumber(event.target.value));
                                    }}

                                />
                            </Grid>
                            <Grid item xs={12} sm={9} className="mx-24 my-5">
                                <InputLabel>:صندوق</InputLabel>

                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    // value={valueSelect}
                                    isRtl
                                    isSearchable
                                    name="userId"
                                    options={cashList}
                                    value={cashList.find((item) => item.value === cashId)}
                                    placeholder="صندوق"
                                    onChange={(event) => {
                                        setValue('cashId', event.value)
                                    }}
                                />
                                {errors?.cashId && <span className="text-danger">{errors?.cashId?.message}</span>}

                            </Grid>
                            <Grid item xs={12} sm={9} className="mx-24 my-5">
                                <InputLabel>:سریال چک پول ها</InputLabel>
                                <TextField
                                    type="text"
                                    multiline
                                    rows={2}
                                    variant="outlined"
                                    fullWidth
                                    {...register('serialNumber')}

                                />
                            </Grid>
                            <Grid item xs={12} sm={9} className="mx-24 my-5">
                                <InputLabel>توضیحات</InputLabel>
                                <TextField
                                    type="text"
                                    multiline
                                    rows={2}
                                    name="des"
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
                        onPress={() => {
                            dispatch(findPaymentMethodData({}));
                            closeHandler();
                        }}
                        css={styleCancelBtn}
                    >
                        کنسل
                    </Button>
                    <Button onPress={handleSubmit(handleClick)} css={styleSaveBtn}>
                        ثبت
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
