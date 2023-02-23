import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReceiveAndPay from './payment-method-modals/ReceiveAndPayModal';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpenReceiveAndPay, setModalOpenReceiveAndPay] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(event);
  };

  return (
    <>
      <div>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="outlined"
          height="30px"
          sx={{ backgrounColor: '#d9d9d9', borderRadius: '3px', width: '200px' }}
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          روش دریافت و پرداخت
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              setModalOpenReceiveAndPay(true);
              handleClose();
            }}
            disableRipple
          >
            نقدی
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            اعتباری
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            قسطی
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            انتقال از/به حساب شخص
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            پرداخت چک
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            مرجوع چک پرداختی
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            کارت بانکی
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            واریز به حساب(دریافت)
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            پرداخت دریافت از بانک/اینترنتی
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            دریافت چک
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            خرج چک
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            مرجوع چک خرجی
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />

          <MenuItem onClick={handleClose} disableRipple>
            تخفیف
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            درآمد/هزینه
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            سند(سایرحسابها)
          </MenuItem>
        </StyledMenu>
      </div>
      {modalOpenReceiveAndPay && (
        <ReceiveAndPay
          openModal={modalOpenReceiveAndPay}
          closeHandler={() => setModalOpenReceiveAndPay(false)}
        />
      )}
    </>
  );
}
