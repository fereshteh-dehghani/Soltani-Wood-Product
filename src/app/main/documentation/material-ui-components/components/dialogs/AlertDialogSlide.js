import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
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
      اسلاید در گفتگوی هشدار
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"از سرویس موقعیت مکانی گوگل استفاده کنید?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          به Google اجازه دهید به برنامه‌ها در تعیین مکان کمک کند. این به معنای ارسال اطلاعات مکان ناشناس به Google است، حتی زمانی که هیچ برنامه‌ای در حال اجرا نیست.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>مخالف بودن</Button>
          <Button onClick={handleClose}>موافق</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
