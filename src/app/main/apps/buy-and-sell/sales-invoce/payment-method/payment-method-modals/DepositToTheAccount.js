import React, { useEffect, useState } from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import Select from "react-select";
import '../../../../../../../styles/MyStyles.css'
import { Grid, InputLabel, MenuItem, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import FuseUtils from "@fuse/utils/FuseUtils";
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
    receiptNumber: '',
    bank: '',
    price: '',
    description: '',
}

export default function DepositToAccount({ paymentMethodData, optionSelectBank }) {

    const { handleDepositToTheAccount } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice)
    const dispatch = useDispatch();
    const closeHandler = () => {
        dispatch(findPaymentMethodData({}));
        dispatch(handleModals({ type: 'deposite', isOpen: false }))
    };

    const schema = yup.object().shape({
        type: yup.number().required('لطفا نوع پرداخت را مشخص کنید!'),
        price: yup.number().required('لطفا مبلغ را وارد کنید!'),
    })
    const {
        register,
        reset,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleClick = () => {
        const formData = getValues();
        if (paymentMethodData?.id !== undefined) {
            dispatch(updatePaymentMethodsItems({
                ...paymentMethodData,
                ...formData,
            }))
        }
        dispatch(addToPaymentMethodsItems({
            id: FuseUtils.generateGUID(),
            paymentMethod: 'deposite',
            paymentMethodPer: 'انتقال به حساب',
            ...formData
        }
        ));
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
                width="40%"
                height="40%"
                open={handleDepositToTheAccount}
                onClose={closeHandler}
            >
                <Modal.Header className="modal-header-style">
                    <Text id="modal-title" size={18}>
                        واریز به حساب
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid style={styleDiv} container justifyContent="center" marginX="10px" row>

                        <Grid item xs={12} sm={9} className="mx-24 my-5">
                            <InputLabel>شماره فیش</InputLabel>
                            <TextField
                                required
                                fullWidth
                                name="receiptNumber"
                                id="receiptNumber"
                                size="small"
                                {...register('receiptNumber')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={9} className="mx-24 my-5">
                            <InputLabel>مبلغ</InputLabel>
                            <TextField
                                required
                                fullWidth
                                name="price"
                                id="price"
                                size="small"
                                {...register('price')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={9} className="mx-24 mt-16 mb-5">
                            <InputLabel>بانک</InputLabel>
                            <Select
                                isRtl
                                className="basic-single"
                                classNamePrefix="select"
                                isSearchable
                                name="bank"
                                style={{ direction: 'rtl' }}
                                options={optionSelectBank}
                                // value={options?.find((item) => item.value === partyId)}
                                // value={{ value: partyId, label: partyRealName }}
                                onChange={(event) => {
                                    setValue('bank', event.label);
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
