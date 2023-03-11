import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CashPayment from './payment-method-modals/CashPayment';
import CreditMethod from './payment-method-modals/CreditModal';
import PayAndReceiveByCardBank from './payment-method-modals/PayAndRecieveByBank';
import PayAndReceiveByCheck from './payment-method-modals/PayAndReceiveByCheck';
import PayOrReceiveAsDiscount from './payment-method-modals/PayOrRecieveAsDiscount';
import DepositToAccount from './payment-method-modals/DepositToTheAccount';
import { handleModals } from '../../store/handleModalsSlice';
import TransferMethod from './payment-method-modals/TransferMethod';

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

export default function CustomizedMenus({
  optionSelectBank,
  operationOptions,
  cashList,
  addCommas,
  convertPriceToNumber,
  removeNonNumeric
}) {


  const {
    modalOpenCashPayment,
    handleCreditModal,
    handleCardBank,
    handleMethodCheck,
    handleMethodDiscount,
    handleDepositToTheAccount,
    handleTransferMethod
  } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice)
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
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
      <div style={{ marginTop: '10' }}>
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
            key={1}
            onClick={() => {
              dispatch(handleModals({ type: 'cash', isOpen: true }))
              handleClose();
            }}
          >
            نقدی
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem key={2} onClick={() => {

            dispatch(handleModals({ type: 'credit', isOpen: true }))
            handleClose();
          }}
          >
            اعتباری
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem key={3} onClick={() => {
            dispatch(handleModals({ type: 'cardBank', isOpen: true }))
            handleClose();
          }}
          >
            کارت بانکی
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem
            key={4}
            onClick={() => {
              dispatch(handleModals({ type: 'check', isOpen: true }))
              handleClose();
            }}
          >
            پرداخت چک
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem
            key={5}
            onClick={() => {
              dispatch(handleModals({ type: 'discount', isOpen: true }))
              handleClose();
            }}
          >
            تخفیف
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem
            key={6}
            onClick={() => {
              dispatch(handleModals({ type: 'transfer', isOpen: true }))
              handleClose();
            }}
          >
            واریز به حساب
          </MenuItem>
        </StyledMenu>
      </div>
      {modalOpenCashPayment && (
        <CashPayment
          paymentMethodData={{}}
          operationOptions={operationOptions}
          cashList={cashList}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={removeNonNumeric}
        />
      )}
      {handleCreditModal &&
        <CreditMethod
          paymentMethodData={{}}
          operationOptions={operationOptions}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={removeNonNumeric}
        />
      }
      {handleCardBank &&
        <PayAndReceiveByCardBank
          optionSelectBank={optionSelectBank}
          paymentMethodData={{}}
          operationOptions={operationOptions}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={removeNonNumeric}

        />
      }

      {handleMethodCheck &&
        < PayAndReceiveByCheck
          paymentMethodData={{}}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={removeNonNumeric}
        />
      }

      {handleMethodDiscount &&
        <PayOrReceiveAsDiscount
          paymentMethodData={{}}
          operationOptions={operationOptions}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={removeNonNumeric}

        />
      }

      {handleDepositToTheAccount &&
        <DepositToAccount
          optionSelectBank={optionSelectBank}
          paymentMethodData={{}}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={removeNonNumeric}
        />

      }
      {handleTransferMethod &&
        <TransferMethod
          paymentMethodData={{}}
          operationOptions={operationOptions}
          cashList={cashList}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={removeNonNumeric}
        />
      }

    </>
  );
}
