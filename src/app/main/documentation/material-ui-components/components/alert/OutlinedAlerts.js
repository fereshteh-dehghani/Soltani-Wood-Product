import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="error">
      این یک هشدار خطا است - آن را بررسی کنید!
      </Alert>
      <Alert variant="outlined" severity="warning">
      این یک هشدار هشدار است - آن را بررسی کنید!
     </Alert>
      <Alert variant="outlined" severity="info">
      این یک هشدار اطلاعاتی است - آن را بررسی کنید!
      </Alert>
      <Alert variant="outlined" severity="success">
      این یک هشدار موفقیت است - آن را بررسی کنید!
      </Alert>
    </Stack>
  );
}
