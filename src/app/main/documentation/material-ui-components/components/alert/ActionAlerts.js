import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ActionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={() => {}}>این یک هشدار موفقیت است - آن را بررسی کنید!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            لغو
          </Button>
        }
      >
        این یک هشدار موفقیت است - آن را بررسی کنید!
      </Alert>
    </Stack>
  );
}
