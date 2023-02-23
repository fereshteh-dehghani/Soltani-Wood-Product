import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
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
      گفتگوی فرم را باز کنید
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>اشتراک در</DialogTitle>
        <DialogContent>
          <DialogContentText>
          برای عضویت در این وب سایت، لطفا آدرس ایمیل خود را در اینجا وارد کنید. ما هر از گاهی به روز رسانی ها را ارسال خواهیم کرد.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>لغو کنید</Button>
          <Button onClick={handleClose}>اشتراک در</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
