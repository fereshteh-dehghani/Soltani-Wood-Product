import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function DisabledTooltips() {
  return (
    <Tooltip title="شما اجازه این کار را ندارید">
      <span>
        <Button disabled>یک دکمه غیرفعال</Button>
      </span>
    </Tooltip>
  );
}
