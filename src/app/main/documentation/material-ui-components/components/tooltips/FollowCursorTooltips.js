import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

export default function FollowCursorTooltips() {
  return (
    <Tooltip title="شما اجازه این کار را ندارید" followCursor>
      <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>
      اکشن غیرفعال
      </Box>
    </Tooltip>
  );
}
