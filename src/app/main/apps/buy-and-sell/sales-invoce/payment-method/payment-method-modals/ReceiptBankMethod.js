import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FuseUtils from '@fuse/utils/FuseUtils';
import { Modal, Button, Text } from '@nextui-org/react';
import Select from 'react-select';
import '../../../../../../../styles/MyStyles.css';
import { Grid, MenuItem, TextField, InputLabel, Box } from '@mui/material';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import { fetchBankAccountList } from 'app/main/apps/baseInformation/store/bankAccountSlice';
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
  amount: '',
  receiptBankType: -1,
  bankReceiptNumber: '',
  description: '',
  receiptBankTypeName: '',
};

const styleDatePicker = {
  'text-align': 'right',
  padding: '4px 12px',
  'background-color': 'white',
  height: '36px',
  width: '100%',
};

const receiptBankTypeOptions = [
  { value: 0, label: 'فیش بانکی' },
  { value: 1, label: 'پوز بانکی' },
];

export default function ReceiptBankMethod({
  paymentMethodData,
  addCommas,
  removeNonNumeric,
  convertPriceToNumber,
}) {
  const { handleReceiptBank } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice);
  const dispatch = useDispatch();
  const [bankAccountList, setBankAccountList] = useState([]);
  const closeHandler = () => {
    dispatch(findPaymentMethodData({}));
    dispatch(handleModals({ type: 'receiptBank', isOpen: false }));
  };

  const schema = yup.object().shape({
    amount: yup.number().required('لطفا مبلغ را وارد کنید!'),
    bankAccountId: yup.number().required('لطفا فیلد بانک را وارد کنید'),
    receiptBankType: yup.number().required('لطفا نوع دریافت را مشخص کنید!'),
    bankReceiptNumber: yup.string().required('شماره رسید اجباری می باشد!'),
    datePer: yup.string().required('لطفا تاریخ را وارد نمایید'),
  });

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

  const bankAccountId = watch('bankAccountId');
  const amount = watch('amount');
  const receiptBankType = watch('receiptBankType');
  const accountInfo = watch('accountInfo');
  const receiptBankTypeName = watch('receiptBankTypeName');

  const handleClick = (data) => {
    if (paymentMethodData?.id !== undefined) {
      dispatch(
        updatePaymentMethodsItems({
          ...paymentMethodData,
          ...data,
          description: `دریافت مبلغ ${amount} به حساب ${accountInfo} به روش ${receiptBankTypeName}`,
        })
      );
    } else {
      dispatch(
        addToPaymentMethodsItems({
          id: FuseUtils.generateGUID(),
          paymentMethod: 'receiptBank',
          paymentMethodPer: 'دریافت فیش بانکی',
          ...data,
          description: `دریافت مبلغ ${amount} به حساب ${accountInfo} به روش ${receiptBankTypeName}`,
        })
      );
    }

    reset(defaultValue);
    dispatch(findPaymentMethodData({}));
  };

  useEffect(() => {
    if (paymentMethodData?.id !== undefined) reset(paymentMethodData);
  }, []);

  useEffect(() => {
    dispatch(fetchBankAccountList())
      .unwrap()
      .then((res) => {
        const tempArray = [];
        res?.forEach((item) => {
          tempArray.push({
            value: item.bankAccountId,
            label: `بانک ${item.bankAccountTitle} شعبه ${item.bankBranchTitle} (${item.owner})`,
          });
        });
        setBankAccountList([...tempArray]);
      });
  });

  return (
    <div>
      <Modal
        closeButton
        style={{ alignItems: 'center', paddingTop: '0px' }}
        aria-labelledby="modal-title"
        width="60%"
        height="40%"
        open={handleReceiptBank}
        onClose={closeHandler}
      >
        <Modal.Header style={{ backgroundColor: '#1B2330', width: '100%', padding: '2%' }}>
          <Text id="modal-title" size={18} color="#fff">
            دریافت بانکی
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Box>
            <Grid style={styleDiv} container justifyContent="center" marginX="10px" spacing={2} row>
              <Grid item xs={12} sm={5} className=" my-5">
                <InputLabel>نوع دریافت</InputLabel>
                <Select
                  isRtl
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable
                  name="receiptBankType"
                  style={{ direction: 'rtl' }}
                  options={receiptBankTypeOptions}
                  value={receiptBankTypeOptions?.find((item) => item.value === receiptBankType)}
                  onChange={(event) => {
                    setValue('receiptBankType', event.value);
                    setValue('receiptBankTypeName', event.label);
                  }}
                />
                {errors?.receiptBankType && (
                  <span className="text-danger">{errors?.receiptBankType?.message}</span>
                )}
              </Grid>
              <Grid item xs={12} sm={5} className="my-5">
                <InputLabel>حساب بانکی</InputLabel>
                <Select
                  isRtl
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable
                  name="bankAccountId"
                  style={{ direction: 'rtl' }}
                  options={bankAccountList}
                  placeholder="..."
                  value={bankAccountList?.find((item) => item.value === bankAccountId)}
                  onChange={(event) => {
                    setValue('bankAccountId', event.value);
                    setValue('accountInfo', event.label);
                  }}
                />
                {errors?.bankAccountId && (
                  <span className="text-danger">{errors?.bankAccountId?.message}</span>
                )}
              </Grid>

              <Grid item xs={12} sm={3} className="my-2">
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

              {errors?.date && <span className="text-danger">{errors?.date?.message}</span>}

              <Grid item xs={12} sm={4} className="my-2">
                <InputLabel>شماره رسید </InputLabel>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth
                  name="bankReceiptNumber"
                  id="bankReceiptNumber"
                  size="small"
                  error={!!errors?.bankReceiptNumber}
                  helperText={errors?.bankReceiptNumber?.message}
                  {...register('bankReceiptNumber')}
                />
              </Grid>

              <Grid item xs={12} sm={3} className="my-2">
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
                  calendarPosition="right-center"
                  onChange={(date) => {
                    const d = new Date(date).toLocaleDateString('fa-IR');
                    setValue('datePer', d);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={10} className="my-2">
                <InputLabel>توضیحات</InputLabel>
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
