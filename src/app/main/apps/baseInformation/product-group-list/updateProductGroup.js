import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { FormGroup, Grid, InputLabel, TextField } from "@mui/material";
import { Button, Modal, Text, Spacer } from "@nextui-org/react";
import Select from 'react-select';
import { showMessage } from "app/store/fuse/messageSlice";
import {  updateProductGroup } from '../store/productGroupListSlice';

const styleInput={
    '&.muirtl-1sf6gop-MuiFormLabel-root-MuiInputLabel-root':{
        direction:'rtl',
        float:'right',
        fontSize:'15px',
        color:'black',
    }
}

const UpdateProductGroup = ({ productGroup, modalOpen, parentGroupList, closeModal }) => {

    const [newProductGroup, setNewProductGroup] = useState({ ...productGroup });
  let productGroupIdSelected = { value: '', label: '' };
    const dispatch = useDispatch();
    const { response } = useSelector(({ baseInformation }) => baseInformation.productGroupListSlice);

    if (Array.isArray(parentGroupList) && parentGroupList !== null) {
        parentGroupList.forEach((element) => {
            if (productGroup.id !== undefined && element.value === productGroup.parentId) {

                productGroupIdSelected = { ...element };
            }
        });
    }

    const onProductGroupUpdate = () => {
        dispatch(updateProductGroup(newProductGroup))
        .unwrap()
        .then((res) => {
          if (res !== undefined && res.result && res.errors.length === 0) {
            dispatch(
              showMessage({
                message: 'عملیات با موفقیت انجام شد', // text or html
                autoHideDuration: 6000, // ms
                anchorOrigin: {
                  vertical: 'top', //   top bottom
                  horizontal: 'right' //  left center right
                },
                variant: 'success' //   success error info warning null
              }))
              closeModal();
          } else {
            dispatch(
              showMessage({
                message: 'عملیات با خطا انجام شد', // text or html
                autoHideDuration: 6000, // ms
                anchorOrigin: {
                  vertical: 'top', //   top bottom
                  horizontal: 'right' //  left center right
                },
                variant: 'error' //   success error info warning null
              }))
          }
        })
        .catch((err) => {
          dispatch(
            showMessage({
              message: 'عملیات با خطا انجام شد', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right' //  left center right
              },
              variant: 'success' //   success error info warning null
            }))
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
            width='35%'
            height='65%'
        >
            <Modal.Header className="Modal-Header" >
                <Text size={17}>
                    ویرایش گروه کالا
                </Text>

            </Modal.Header>
            <Modal.Body>

                <form>
                    <FormGroup>
                        <Grid item sm={12}>
                            <FormGroup>
                                <InputLabel style={{color:"black" , fontWeight:"bold", borderRadius:"5px" , float:"right"}} sx={styleInput}>
                                    گروه کالای والد
                                </InputLabel>
                                <Select
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    name="form-field-name"
                                    defaultValue={productGroupIdSelected}
                                    onChange={(e) => {
                                        setNewProductGroup({ ...newProductGroup, parentId: e.value });
                                    }}
                                    options={parentGroupList}
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item sm={12}>
                            <FormGroup>
                                <InputLabel  style={{color:"black" , fontWeight:"bold", borderRadius:"5px"}} for="code" sx={styleInput}>
                                    کد
                                </InputLabel>
                                <TextField
                                    fullWidth
                                    required
                                    id="code"
                                    value={newProductGroup.code}
                                    onChange={(e) => setNewProductGroup({ ...newProductGroup, code: e.target.value })}
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item sm={12}>
                            <FormGroup>
                                <InputLabel  style={{color:"black" , fontWeight:"bold" , borderRadius:"5px"}} for="title">
                                    عنوان
                                </InputLabel>
                                <TextField
                                    type="text"
                                    id="title"
                                    value={newProductGroup.label}
                                    onChange={(e) => setNewProductGroup({ ...newProductGroup, label: e.target.value })}
                                />
                            </FormGroup>
                        </Grid>
                    </FormGroup>
                </form>

            </Modal.Body>
            <Spacer y={3} />
            <Modal.Footer>
                <Button color="secondary" outline onClick={closeModal}>
                    انصراف
                </Button>

                <Button
                    color="primary"
                    onClick={() => onProductGroupUpdate({ ...productGroup, ...newProductGroup })}
                >
                    ارسال
                </Button>
            </Modal.Footer>
        </Modal>

    );
};
export default UpdateProductGroup;
