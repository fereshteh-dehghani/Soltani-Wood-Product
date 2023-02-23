import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      گفتگوی هشدار را باز کنید
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"از سرویس موقعیت مکانی گوگل استفاده کنید?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          به Google اجازه دهید به برنامه‌ها در تعیین مکان کمک کند. این به معنای ارسال اطلاعات مکان ناشناس به Google است، حتی زمانی که هیچ برنامه‌ای در حال اجرا نیست.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>مخالف بودن</Button>
          <Button onClick={handleClose} autoFocus>
          موافق
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
