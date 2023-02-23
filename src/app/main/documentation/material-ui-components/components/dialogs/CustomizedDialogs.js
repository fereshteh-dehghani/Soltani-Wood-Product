import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
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
      گفتگو را باز کنید
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        عنوان مدال
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          فردا زمین با تخمیر خالص دنبال خواهد شد. فردا فقط نفرت
          پروتئین ها و تسهیلات در، نیاز به چه شیر موربی می خندد دروازه و تعقیب و دهلیز و اروس.
          </Typography>
          <Typography gutterBottom>
          این یک فرصت عالی برای یک مسابقه بزرگ است، وگرنه دشمن دنبال خواهد شد.
          </Typography>
          <Typography gutterBottom>
          Aeneas lacinia نباید نوشیده شود، اما پیگیری می شود. این یک مزیت بزرگ است یا طرفداران آن را دنبال خواهند کرد. متاسفانه ازت متنفرم تا زمانی که ullamcorper هیچ ترسی از فرینگلا نویسنده وجود ندارد.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
          ذخیره تغییرات
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
