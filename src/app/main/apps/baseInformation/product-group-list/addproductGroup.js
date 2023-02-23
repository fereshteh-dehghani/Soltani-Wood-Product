import { useState } from 'react';
import { FormGroup, Grid, InputLabel, TextField } from '@mui/material';
import { Button, Modal, Spacer, Text } from '@nextui-org/react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'app/store/fuse/messageSlice';
import { addProductGroup } from '../store/productGroupListSlice';
import "../../../../../styles/MyStyles.css"

const styleInput = {
  '&.muirtl-1sf6gop-MuiFormLabel-root-MuiInputLabel-root': {
    direction: 'rtl',
    float: 'right',
    fontSize: '15px',
    color: 'black',
  },
};

const styleInputBorder = {
  '&.muirtl-10vdeej-MuiInputBase-input-MuiOutlinedInput-input': {
    color: 'black',
    border: '1px solid black',
    'border-radius': '5px',
  },
};
const styleBtn = {
  'font-size': '14px',
};

const AddNewProductGroup = ({ modalOpen, parentGroupList, closeModal }) => {
  const [newProductGroup, setNewProductGroup] = useState({});
  const [selectedOption, setSelectedOption] = useState({ value: '', label: '' });

  const dispatch = useDispatch();
  const { response } = useSelector(({ baseInformation }) => baseInformation.productGroupListSlice);

  const addProductGroupHandle = () => {
    dispatch(
      addProductGroup({
        title: newProductGroup.label,
        hierarchyTitle: '',
        parentGroupId: newProductGroup.parentId,
        version: 1,
        code: newProductGroup.code,
        childCodeLength: 0,
        hierarchyCode: 'string',
        hasChild: true,
      })
    )
      .unwrap()
      .then((res) => {
        if (res !== undefined && res.result && res.errors.length === 0) {
          dispatch(
            showMessage({
              message: 'عملیات با موفقیت انجام شد', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'success', //   success error info warning null
            })
          );
        } else {
          dispatch(
            showMessage({
              message: 'عملیات با خطا انجام شد', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'error', //   success error info warning null
            })
          );
        }
      })
      .catch((err) => {
        dispatch(
          showMessage({
            message: 'عملیات با خطا انجام شد', // text or html
            autoHideDuration: 6000, // ms
            anchorOrigin: {
              vertical: 'top', //   top bottom
              horizontal: 'right', //  left center right
            },
            variant: 'success', //   success error info warning null
          })
        );
      });
  };

  return (
    <Modal
      style={{paddingTop:"0px"}}
      closeButton
      preventClose
      aria-labelledby="modal-title"
      open={modalOpen}
      onClose={closeModal}
      width="35%"
      heigth="65%"
    >
      <Modal.Header className='Modal-Header' >
        <Text size={18}>اضافه کردن گروه کالا جدید</Text>
      </Modal.Header>
      <Modal.Body css={{ '&.nextui-c-iDzHRq': { 'text-align': 'right' }, color: '#111' }}>
        <form>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <FormGroup>
                <InputLabel style={{color:"black"}} >گروه کالای والد</InputLabel>
                <Select
                  style={{border:"1px solid black" , borderRadius:"5px"}}
                  className="react-select"
                  classNamePrefix="react-select"
                  name="form-field-name"
                  value={newProductGroup.parentGroupId}
                  onChange={(e) => {
                    setNewProductGroup({ ...newProductGroup, parentId: e.value });
                  }}
                  options={parentGroupList}
                />
              </FormGroup>
            </Grid>
            <Spacer y={1} />
            <Grid item xs={12}>
              <FormGroup>
                <InputLabel style={{color:"black" , fontWeight:"bold", borderRadius:"5px"}} htmlFor="code" sx={styleInput}>
                  کد
                </InputLabel>
                <TextField
                  style={{border:"1px solid black"}}
                  fullWidth
                  required
                  sx={styleInputBorder}
                  id="code"
                  value={newProductGroup.code}
                  onChange={(e) => setNewProductGroup({ ...newProductGroup, code: e.target.value })}
                />
              </FormGroup>
            </Grid>
            <Spacer y={1} />
            <Grid item xs={12}>
              <FormGroup>
                <InputLabel style={{color:"black" , fontWeight:"bold", borderRadius:"5px"}} htmlFor="label" sx={styleInput}>
                  عنوان
                </InputLabel>
                <TextField
                  style={{border:"1px solid black"}}
                  sx={styleInputBorder}
                  type="text"
                  id="label"
                  defaultValue={newProductGroup.title}
                  onChange={(e) =>
                    setNewProductGroup({ ...newProductGroup, label: e.target.value })
                  }
                />
              </FormGroup>
            </Grid>
          </Grid>
        </form>
      </Modal.Body>
      <Spacer y={1} />

      <Modal.Footer>
        <Grid container sx={{ margin: 'auto' }}>
          <Grid item justifyContent='flex-end' xs={6}>
            <Button css={styleBtn} color="secondary" outline onClick={() => closeModal()}>
              انصراف
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              css={styleBtn}
              color="primary"
              onClick={() => {
                addProductGroupHandle();
              }}
            >
              ارسال
            </Button>
          </Grid>
        </Grid>
      </Modal.Footer>
    </Modal>
  );
};
export default AddNewProductGroup;
