import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';
import { apiUrlSaleInvoice } from 'app/services/jwtService/defaultValues';
import { Save } from '@mui/icons-material';
import { Button, Loading } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

const styleBtn = {
  backgroundColor: '#00d041',
  borderRadius: '5px',
  height: '35px',
  fontSize: '1.6rem',
  '&:hover': {
    backgroundColor: '#00d084',
  },
};

const SalesInvoiceHeader = ({ handleSubmit, isLoading }) => {
  const methods = useFormContext();
  const { getValues, reset } = methods;
  const formData = getValues();




  return (
    <Button
      shadow
      ripple
      animated
      css={styleBtn}
      iconRight={!isLoading && <Save />}
      onClick={() => handleSubmit(formData)}
    >
      {isLoading && <Loading color="currentColor" size="lg" />}
      {!isLoading && 'ذخیره'}
    </Button>
  );
};

export default SalesInvoiceHeader;
