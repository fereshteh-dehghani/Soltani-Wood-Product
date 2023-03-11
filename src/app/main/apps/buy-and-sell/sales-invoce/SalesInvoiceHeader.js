// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useMutation } from 'react-query';
// import axios from 'axios';
// import { apiUrlSaleInvoice } from 'app/services/jwtService/defaultValues';
// import { Save, TaskAltOutlined } from '@mui/icons-material';
// import { Button, Loading } from '@nextui-org/react';
// import { useFormContext } from 'react-hook-form';
// import { Grid } from '@mui/material';

// const styleBtn = {
//   backgroundColor: '#00d041',
//   borderRadius: '5px',
//   height: '35px',
//   fontSize: '1.6rem',
//   '&:hover': {
//     backgroundColor: '#00d084',
//   },
// };

// const SalesInvoiceHeader = ({ handleSubmit, isLoading }) => {
//   const methods = useFormContext();
//   const { getValues, reset } = methods;
//   const formData = getValues();

//   return (
//     <Grid container sm={12} xs={12} style={{ justifyContent: 'flex-end' }}>
//       <Button
//         sm={12}
//         shadow
//         ripple
//         animated
//         css={styleBtn}
//         style={{ marginLeft: '27px' }}
//         onClick={() => handleSubmit(formData)}
//       >
//         {!isLoading && <TaskAltOutlined className="mx-4" />}
//         {isLoading && <Loading color="currentColor" size="lg" />}
//         {!isLoading && 'ثبت فاکتور'}
//       </Button>
//     </Grid>
//   );
// };

// export default SalesInvoiceHeader;
