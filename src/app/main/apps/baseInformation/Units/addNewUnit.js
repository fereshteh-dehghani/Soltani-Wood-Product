import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
    Grid,
    InputLabel,
    TextField
} from "@mui/material";
import { Button, Modal, Text } from "@nextui-org/react";
import { showMessage } from "app/store/fuse/messageSlice";
import { addNewUnit } from "../store/unitsSlice";




const AddNewUnit = ({ modalOpen, handleClose }) => {
    // const [isOpenModal, setIsOpenModal] = useState(modalOpen);


    const [newUnit, setNewunit] = useState({
        title: "",
        version: 1,
    })

    const { response, data } = useSelector(({ baseInformation }) => baseInformation.unitsSlice)
    const dispatch = useDispatch();
    const submitNewUnit = async (unit) => {
        let isHasUnit = true;
        data.forEach(elem => {
            if (elem.title === unit.title) {
                isHasUnit = false;
            }
        })
        if (!isHasUnit) {
            dispatch(
                showMessage({
                    message: 'عنوان واحد سنجش تکراری می باشد', // text or html
                    autoHideDuration: 6000, // ms
                    anchorOrigin: {
                        vertical: 'top', //   top bottom
                        horizontal: 'right' //  left center right
                    },
                    variant: 'success' //   success error info warning null
                }))
        } else {
            dispatch(addNewUnit(unit))
            .unwrap()
    .then((res)=> {
      if(res!==undefined && res.data.result){
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
      }else{
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
    .catch((err)=>{
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

    }
    }


return (
    <Modal
        style={{paddingTop:"0px"}}
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={modalOpen}
        width='40%'
        onClose={handleClose}
    >
        <Modal.Header className="Modal-Header" >
            <Text size={18}>
                واحد جدید
            </Text>
        </Modal.Header>
        <Modal.Body>

            <form>
                <InputLabel htmlFor="title">
                    عنوان
                </InputLabel>
                <TextField
                    sx={{ border: '1px solid grey', color: '#111', '&.muirtl-6bojjw-MuiInputBase-input-MuiOutlinedInput-input': { color: '#000' } }}
                    required
                    fullWidth
                    size="small"
                    id="title"
                    onChange={(e) => setNewunit({ ...newUnit, title: e.target.value })}
                />
            </form>

        </Modal.Body>
        <Modal.Footer>
            <Button
                css={{ 'fontSize': '14px' }}
                color="secondary"
                outline
                onClick={handleClose}
            >

                انصراف
            </Button>

            <Button
                css={{ 'fontSize': '14px' }}
                color="primary"
                onClick={() => {
                    submitNewUnit(newUnit);
                }}
            >
                ارسال
            </Button>
        </Modal.Footer>
    </Modal>

);
}
export default AddNewUnit;
