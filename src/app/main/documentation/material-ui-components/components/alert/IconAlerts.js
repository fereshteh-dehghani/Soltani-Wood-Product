import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';

export default function IconAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      این یک هشدار موفقیت است - آن را بررسی کنید!
      </Alert>
      <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
       این یک هشدار موفقیت است - آن را بررسی کنید!
      </Alert>
      <Alert icon={false} severity="success">
      این یک هشدار موفقیت است - آن را بررسی کنید!
      </Alert>
    </Stack>
  );
}
