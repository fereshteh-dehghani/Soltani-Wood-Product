import React, { useEffect } from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import FuseUtils from "@fuse/utils/FuseUtils";
import Select from "react-select";
import '../../../../../../../styles/MyStyles.css'
import { Grid, MenuItem, TextField, InputLabel } from "@mui/material";
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
}

const defaultValue = {
    type: '',
    price: '',
    description: ''
}

export default function TransferMethod({
    paymentMethodData,
    operationOptions,
    addCommas,
    removeNonNumeric,
    convertPriceToNumber
}) {

    const { handleTransferMethod } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice)
    const dispatch = useDispatch();
    const closeHandler = () => dispatch(handleModals({ type: 'transfer', isOpen: false }));

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
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const type = watch('type');
    const price = watch('price');

    const handleClick = (data) => {
        if (paymentMethodData?.id !== undefined) {
            dispatch(updatePaymentMethodsItems({
                ...paymentMethodData,
                ...data,
            }))
        } else {
            dispatch(addToPaymentMethodsItems({
                id: FuseUtils.generateGUID(),
                paymentMethod: 'transfer',
                paymentMethodPer: 'واریز به حساب',
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
                width="40%"
                height="40%"
                open={handleTransferMethod}
                onClose={closeHandler}
            >
                <Modal.Header className="modal-header-style">
                    <Text id="modal-title" size={18}>
                        واریز به حساب
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid style={styleDiv} container justifyContent="center" marginX="10px" row>
                        <Grid item xs={12} sm={9} className="mx-24 mt-16 mb-5">
                            <InputLabel>عملیات</InputLabel>
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
                        </Grid>
                        <Grid item xs={12} sm={9} className="mx-24 my-5">
                            <InputLabel htmlFor="person">شخص</InputLabel>
                            <TextField
                                required
                                fullWidth
                                name="شخص"
                                id="شخص"
                                size="small"
                                {...register('person')}

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
                                value={addCommas(removeNonNumeric(price))}
                                onChange={(event) => setValue('price', convertPriceToNumber(event.target.value))}

                            />
                        </Grid>
                        <Grid item xs={12} sm={9} className="mx-24 my-5">
                            <InputLabel>تاریخ</InputLabel>
                            <DatePicker
                                id="date"
                                style={styleDatePicker}
                                calendar={persian}
                                locale={persianFa}
                                placeholder="YYYY/MM/DD"
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
                        کنسل
                    </Button>
                    <Button
                        onPress={handleSubmit(handleClick)}
                        css={styleSaveBtn}
                    >
                        ثبت
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
