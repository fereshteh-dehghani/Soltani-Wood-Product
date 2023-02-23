import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>خطا</AlertTitle>
        این یک هشدار خطا است — <strong>آن را بررسی کنید!</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>هشدار</AlertTitle>
        این یک هشدار هشدار است — <strong>آن را بررسی کنید!</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>اطلاعات</AlertTitle>
        این یک هشدار اطلاعاتی است — <strong>آن را بررسی کنید!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>موفقیت</AlertTitle>
        این یک هشدار موفقیت است — <strong>آن را بررسی کنید!</strong>
      </Alert>
    </Stack>
  );
}
