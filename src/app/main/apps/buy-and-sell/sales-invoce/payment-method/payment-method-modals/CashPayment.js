import React, { useState, useEffect } from 'react';
import FuseUtils from '@fuse/utils/FuseUtils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, InputLabel, MenuItem, TextField, Box } from '@mui/material';
import { Modal, Button, Text } from '@nextui-org/react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import Select from 'react-select';
import '../../../../../../../styles/MyStyles.css';
import {
  addToPaymentMethodsItems,
  findPaymentMethodData,
  updatePaymentMethodsItems,
} from '../../../store/paymentMethodsSlice';
import { handleModals } from '../../../store/handleModalsSlice';

const styleSaveBtn = {
  backgroundColor: '#153247',
  borderRadius: '5px',
  width: '48%',
  padding: '5px',
  paddingLeft: '50px',
  paddingRight: '50px',
};
const styleCancelBtn = {
  borderRadius: '5px',
  fontSize: '1.2rem',
  width: '48%',
  padding: '5px',
  paddingLeft: '50px',
  paddingRight: '50px',
};

const styleDiv = {
  'text-align': 'right',
};

const defaultValue = {
  id: '',
  amount: '',
  cashId: '',
  opreationalType: '',
  datePer: '',
  description: '',
};
const styleDatePicker = {
  'text-align': 'right',
  padding: '4px 12px',
  'background-color': 'white',
  height: '36px',
  width: '100%',
};

export default function CashPayment({
  paymentMethodData,
  operationOptions,
  cashList,
  addCommas,
  removeNonNumeric,
  convertPriceToNumber,
}) {
  const { modalOpenCashPayment } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(findPaymentMethodData({}));
    dispatch(handleModals({ type: 'settlementCashItems', isOpen: false }));
  };

  const schema = yup.object().shape({
    opreationalType: yup.number().required('لطفا نوع پرداخت را مشخص کنید!'),
    amount: yup.number().required('لطفا مبلغ را وارد نمایید!'),
    cashId: yup.number().required('لطفا صندوق را مشخص کنید!'),
    datePer: yup.string().required('لطفا تاریخ را وارد نمایید'),
  });

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

  const opreationalType = watch('opreationalType');
  const cashId = watch('cashId');
  const amount = watch('amount');
  const cashName = watch('cashName');
  const description = watch('description');

  useEffect(() => {
    if (paymentMethodData?.id !== undefined) reset(paymentMethodData);
  }, []);

  const handleClick = (data) => {
    let opType = 'دریافت نقدی';
    if (opreationalType === 1) {
      opType = 'پرداخت نقدی';
    }
    if (paymentMethodData?.id !== undefined) {
      dispatch(
        updatePaymentMethodsItems({
          ...paymentMethodData,
          ...data,
          description: `${description} ${opType} مبلغ ${amount} واریز به صندوق ${cashName}`,
        })
      );
    } else {
      dispatch(
        addToPaymentMethodsItems({
          id: FuseUtils.generateGUID(),
          paymentMethod: 'settlementCashItems',
          paymentMethodPer: opType,
          ...data,
          description: `${description} ${opType} مبلغ ${amount} واریز به صندوق ${cashName}`,
        })
      );
    }
    dispatch(findPaymentMethodData({}));
    reset({ ...defaultValue });
  };

  return (
    <div>
      <Modal
        closeButton
        style={{ alignItems: 'center', paddingTop: '0px' }}
        aria-labelledby="modal-title"
        width="60%"
        height="60%"
        open={modalOpenCashPayment}
        onClose={closeHandler}
      >
        <Modal.Header style={{ backgroundColor: '#1B2330', width: '100%', padding: '2%' }}>
          <Text id="modal-title" size={18} color="#fff">
            دریافت/پرداخت نقدی
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Box container justifyContent="flex" component="form">
            <Grid style={styleDiv} container justifyContent="center" marginX="10px" row spacing={1}>
              <Grid item xs={12} sm={3} className="my-5">
                <InputLabel>عملیات</InputLabel>
                <Select
                  isRtl
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable
                  name="opreationalType"
                  style={{ direction: 'rtl' }}
                  options={operationOptions}
                  value={operationOptions?.find((item) => item.value === opreationalType)}
                  // value={{ value: partyId, label: partyRealName }}
                  onChange={(event) => {
                    setValue('opreationalType', event.value);
                  }}
                />
                {errors?.opreationalType && (
                  <span className="text-danger">{errors?.opreationalType?.message}</span>
                )}
              </Grid>
              <Grid item xs={12} sm={3} className="my-5">
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
                  onChange={(event) => {
                    setValue('amount', convertPriceToNumber(event.target.value));
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={3} className="my-5">
                <InputLabel>تاریخ</InputLabel>
                <DatePicker
                  id="date"
                  style={styleDatePicker}
                  calendar={persian}
                  locale={persianFa}
                  placeholder="تاریخ YYYY/MM/DD"
                  containerStyle={{
                    width: '100%',
                  }}
                  calendarPosition="left-center"
                  onChange={(date) => {
                    const d = new Date(date).toLocaleDateString('fa-IR');
                    setValue('datePer', d);
                  }}
                />
                {errors?.datePer && <span className="text-danger">{errors?.datePer?.message}</span>}
              </Grid>
              <Grid item xs={12} sm={9} className="my-3">
                <InputLabel>صندوق</InputLabel>

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
                    setValue('cashId', event.value);
                    setValue('cashName', event.label);
                  }}
                />
                {errors?.cashId && <span className="text-danger">{errors?.cashId?.message}</span>}
              </Grid>

              <Grid item xs={12} sm={9} className="my-3">
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
            size={14}
            onPress={() => {
              dispatch(findPaymentMethodData({}));
              closeHandler();
            }}
            css={styleCancelBtn}
          >
            <Text color="#fff" size={16}>
              بستن
            </Text>
          </Button>
          <Button onPress={handleSubmit(handleClick)} size={16} css={styleSaveBtn}>
            <Text color="#fff" size={14}>
              ثبت
            </Text>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
