import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      گفتگوی پاسخگو را باز کنید
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"از سرویس موقعیت مکانی گوگل استفاده کنید?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          به Google اجازه دهید به برنامه‌ها در تعیین مکان کمک کند. این به معنای ارسال اطلاعات مکان ناشناس به Google است، حتی زمانی که هیچ برنامه‌ای در حال اجرا نیست.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
          مخالف بودن
          </Button>
          <Button onClick={handleClose} autoFocus>
            موافق
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
