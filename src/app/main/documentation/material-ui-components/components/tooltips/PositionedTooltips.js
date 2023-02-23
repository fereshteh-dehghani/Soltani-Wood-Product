import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function PositionedTooltips() {
  return (
    <Box sx={{ width: 500 }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip title="افزودن" placement="top-start">
            <Button>بالا - start</Button>
          </Tooltip>
          <Tooltip title="افزودن" placement="top">
            <Button>بالا</Button>
          </Tooltip>
          <Tooltip title="افزودن" placement="top-end">
            <Button>بالا - end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Tooltip title="افزودن" placement="left-start">
            <Button>چپ - start</Button>
          </Tooltip>
          <br />
          <Tooltip title="افزودن" placement="left">
            <Button>چپ</Button>
          </Tooltip>
          <br />
          <Tooltip title="افزودن" placement="left-end">
            <Button>چپ - end</Button>
          </Tooltip>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Tooltip title="افزودن" placement="right-start">
              <Button>راست - start</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="افزودن" placement="right">
              <Button>راست</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="افزودن" placement="right-end">
              <Button>راست - end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip title="افزودن" placement="bottom-start">
            <Button>پایین - start</Button>
          </Tooltip>
          <Tooltip title="افزودن" placement="bottom">
            <Button>پایین</Button>
          </Tooltip>
          <Tooltip title="افزودن" placement="bottom-end">
            <Button>پایین - end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
